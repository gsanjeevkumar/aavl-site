// lib/gmail.ts

import { google } from "googleapis";
import type { OAuth2Client } from "google-auth-library";

// Loads Gmail OAuth2 client from environment variables.
// Expected env vars (add to .env):
// GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URI, GMAIL_REFRESH_TOKEN, GMAIL_SENDER_EMAIL
function getOAuth2Client(): OAuth2Client {
  const { GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URI, GMAIL_REFRESH_TOKEN } = process.env;
  if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REDIRECT_URI || !GMAIL_REFRESH_TOKEN) {
    throw new Error("Missing required Gmail OAuth environment variables.");
  }
  const oAuth2Client = new google.auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });
  return oAuth2Client;
}

export async function sendGmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const auth = getOAuth2Client();
  const gmail = google.gmail({ version: "v1", auth });
  const rawMessage = [
    `From: "${process.env.GMAIL_SENDER_EMAIL}" <${process.env.GMAIL_SENDER_EMAIL}>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    "Content-Type: text/html; charset=utf-8",
    "",
    html,
  ].join("\n");
  const encoded = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw: encoded },
  });
}