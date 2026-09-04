// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { sendSmtpEmail } from "@/lib/email";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
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

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    // Send email via SMTP
    const emailHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;
    try {
      await sendSmtpEmail({
        to: "info@recoveraccidentvalue.com",
        subject: `New contact form submission from ${name}`,
        html: emailHtml,
      });
    } catch (err) {
      console.error("SMTP send error:", err);
      // Continue – we still respond success to the client to avoid exposing internal errors.
    }
    console.log("Contact form submission:", { name, email, phone, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
