import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message, turnstileToken } = await req.json();

    // Verify Turnstile Token
    if (!turnstileToken) {
      return NextResponse.json({ message: 'Missing Turnstile token' }, { status: 400 });
    }

    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const secretKey = '0x4AAAAAADT7gy2_hkPm85bhEIa1-qR4TXk';

    const verificationResponse = await fetch(verifyEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      console.error('Turnstile verification failed:', verificationResult);
      return NextResponse.json({ message: 'Captcha verification failed' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `DAVLabs Inquiry: ${service} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Service Interest: ${service}
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}