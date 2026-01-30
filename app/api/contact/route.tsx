import { NextResponse } from "next/server"
// Uncomment if using Nodemailer
// import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Example: send email using Nodemailer
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New contact message from ${name}`,
      text: message,
    })
    */

    console.log("Contact form submitted:", { name, email, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
