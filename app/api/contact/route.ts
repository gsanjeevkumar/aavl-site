// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { sendGmail } from "@/lib/gmail";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = (await request.json()) as ContactPayload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }



    // Send email via Gmail API
    const emailHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;
    try {
      await sendGmail({
        to: process.env.GMAIL_SENDER_EMAIL!,
        subject: `New contact form submission from ${name}`,
        html: emailHtml,
      });
    } catch (err) {
      console.error("Gmail send error:", err);
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
