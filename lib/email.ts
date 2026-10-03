import nodemailer from 'nodemailer';
import type { SendMailOptions } from 'nodemailer';


export async function sendSmtpEmail({
  to,
  subject,
  html,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: SendMailOptions['attachments'];
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Recover Accident Value" <${process.env.SMTP_FROM_EMAIL}>`,
    to,
    subject,
    html,
    ...(attachments && { attachments }),
  });
}