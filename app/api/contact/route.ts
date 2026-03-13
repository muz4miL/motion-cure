import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, condition, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build the email HTML template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#18181b 0%,#27272a 100%);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <h1 style="margin:0;color:#fbbf24;font-size:22px;font-weight:700;letter-spacing:2px;">
        THE MOTION CURE
      </h1>
      <p style="margin:6px 0 0;color:#a1a1aa;font-size:12px;letter-spacing:1px;">
        PHYSIOTHERAPY CLINIC · PESHAWAR
      </p>
    </div>

    <!-- Content -->
    <div style="background:#ffffff;padding:32px;border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7;">
      <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
        <p style="margin:0;color:#92400e;font-size:14px;font-weight:600;">
          📬 New Contact Form Submission
        </p>
      </div>

      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;width:130px;vertical-align:top;">
            Full Name
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#18181b;font-size:14px;">
            ${name}
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;vertical-align:top;">
            Email
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#18181b;font-size:14px;">
            <a href="mailto:${email}" style="color:#b45309;text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;vertical-align:top;">
            Phone
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#18181b;font-size:14px;">
            <a href="tel:${phone}" style="color:#b45309;text-decoration:none;">${phone}</a>
          </td>
        </tr>
        ${condition ? `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;vertical-align:top;">
            Condition
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;color:#18181b;font-size:14px;">
            <span style="display:inline-block;background:#fef3c7;color:#92400e;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;">
              ${condition}
            </span>
          </td>
        </tr>` : ""}
        <tr>
          <td style="padding:12px 0;color:#71717a;font-size:13px;font-weight:600;vertical-align:top;">
            Message
          </td>
          <td style="padding:12px 0;color:#18181b;font-size:14px;line-height:1.6;">
            ${message.replace(/\n/g, "<br>")}
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background:#fafafa;border-radius:0 0 16px 16px;padding:20px 32px;border:1px solid #e4e4e7;border-top:none;text-align:center;">
      <p style="margin:0;color:#a1a1aa;font-size:11px;">
        This email was sent from the Motion Cure website contact form.
      </p>
      <p style="margin:6px 0 0;color:#d4d4d8;font-size:10px;">
        Hayatabad Toll Plaza, Sami Tower, 4th Floor, Clinic #411, Peshawar
      </p>
    </div>
  </div>
</body>
</html>`;

    // --- Email Sending ---
    // Option 1: Using nodemailer (requires npm install nodemailer)
    // Uncomment and configure with your SMTP credentials in .env.local:
    //   SMTP_HOST=smtp.gmail.com
    //   SMTP_PORT=587
    //   SMTP_USER=your-email@gmail.com
    //   SMTP_PASS=your-app-password
    //
    // const nodemailer = require("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: `"Motion Cure Website" <${process.env.SMTP_USER}>`,
    //   to: "muj4544@gmail.com",
    //   replyTo: email,
    //   subject: `New Contact: ${name} — ${condition || "General Inquiry"}`,
    //   html: emailHtml,
    // });

    // For now, log the submission (replace with actual email sending above)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log({ name, email, phone, condition, message });
    console.log("Email HTML generated successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
