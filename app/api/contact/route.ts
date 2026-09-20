// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { sendSmtpEmail } from "@/lib/email";

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  accidentDate?: string;
  accidentDescription?: string;
  atFaultInsuranceCompany?: string;
  atFaultClaimNumber?: string;
  yourCarrier?: string;
  yourClaimNumber?: string;
  vehicleRepaired?: string;
  vehicleInPossession?: string;
  totalLoss?: string;
  settlementOfferReceived?: string;
  settlementAccepted?: string;
  additionalComments?: string;
  accuracyConfirmed?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const vehicleYear = body.vehicleYear?.trim() ?? "";
    const vehicleMake = body.vehicleMake?.trim() ?? "";
    const vehicleModel = body.vehicleModel?.trim() ?? "";
    const accidentDate = body.accidentDate?.trim() ?? "";
    const accidentDescription = body.accidentDescription?.trim() ?? "";
    const atFaultInsuranceCompany = body.atFaultInsuranceCompany?.trim() ?? "";
    const atFaultClaimNumber = body.atFaultClaimNumber?.trim() ?? "";
    const yourCarrier = body.yourCarrier?.trim() ?? "";
    const yourClaimNumber = body.yourClaimNumber?.trim() ?? "";
    const vehicleRepaired = body.vehicleRepaired?.trim() ?? "";
    const vehicleInPossession = body.vehicleInPossession?.trim() ?? "";
    const totalLoss = body.totalLoss?.trim() ?? "";
    const settlementOfferReceived = body.settlementOfferReceived?.trim() ?? "";
    const settlementAccepted = body.settlementAccepted?.trim() ?? "";
    const additionalComments = body.additionalComments?.trim() ?? "";
    const accuracyConfirmed = body.accuracyConfirmed === true;

    if (!fullName || !email || !accidentDescription) {
      return NextResponse.json(
        { success: false, error: "Name, email, and accident description are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    if (accidentDescription.length < 10 || accidentDescription.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Accident description must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    if (!accuracyConfirmed) {
      return NextResponse.json(
        { success: false, error: "Please confirm the information is accurate." },
        { status: 400 }
      );
    }

    const row = (label: string, value: string) =>
      value ? `<p><strong>${label}:</strong> ${esc(value)}</p>` : "";

    // Send email via SMTP
    const emailHtml = `
      <h2>Free Claim Review Submission</h2>
      ${row("Full Name", fullName)}
      ${row("Email", email)}
      ${row("Phone", phone)}
      <hr/>
      <h3>Vehicle Information</h3>
      ${row("Year", vehicleYear)}
      ${row("Make", vehicleMake)}
      ${row("Model", vehicleModel)}
      <hr/>
      <h3>Accident Information</h3>
      ${row("Date of Accident", accidentDate)}
      <p><strong>Accident Description:</strong></p>
      <p>${esc(accidentDescription).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <h3>Insurance Information</h3>
      ${row("At-Fault Insurance Company", atFaultInsuranceCompany)}
      ${row("At-Fault Claim Number", atFaultClaimNumber)}
      ${row("Your Comprehensive/Collision Carrier", yourCarrier)}
      ${row("Your Claim Number", yourClaimNumber)}
      <hr/>
      <h3>Vehicle Status</h3>
      ${row("Vehicle Repaired?", vehicleRepaired)}
      ${row("Still in Possession?", vehicleInPossession)}
      ${row("Total Loss?", totalLoss)}
      ${row("Settlement Offer Received?", settlementOfferReceived)}
      ${row("Settlement Accepted?", settlementAccepted)}
      <hr/>
      <h3>Additional Information</h3>
      ${row("Additional Comments", additionalComments)}
    `;
    try {
      await sendSmtpEmail({
        to: "gsanjeevkumar@gmail.com",
        subject: `New free claim review from ${fullName}`,
        html: emailHtml,
      });
    } catch (err) {
      console.error("SMTP send error:", err);
      // Continue – we still respond success to the client to avoid exposing internal errors.
    }
    console.log("Free claim review submission:", { fullName, email, phone });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
