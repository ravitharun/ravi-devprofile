const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,          // your Gmail
    pass: process.env.GOOGLE_APP_PASSWORD // your Gmail App Password
  }
});


// Contact form POST route
router.post('/Send', async function (req, res) {
  try {
    const data = req.body;

    // Validate required fields
    
console.log(data)
   const message = {
  from: data.Email,
  to: "tharunravi672@gmail.com",
  subject: data.Subject,
  text: `New message from ${data.Name} (${data.Email})\nSubject: ${data.Subject}\nMessage: ${data.Message}`,
  html: `
    <div style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      max-width: 600px; 
      margin: auto; 
      padding: 30px; 
      background-color: #ffffff; 
      border-radius: 15px; 
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      color: #333333;
    ">
      <h1 style="text-align: center; color: #2c3e50;">📩 New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${data.Name}</p>
      <p><strong>Email:</strong> ${data.Email}</p>
      <p><strong>Subject:</strong> ${data.Subject}</p>
      <p><strong>Message:</strong></p>
      <div style="
        background-color: #f4f6f8; 
        padding: 15px; 
        border-left: 5px solid #3498db; 
        border-radius: 5px;
        line-height: 1.5;
        color: #555555;
      ">
        ${data.Message}
      </div>
      <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e0e0e0;">
      <p style="font-size: 0.85em; color: #888888; text-align: center;">
        This email was sent via <strong>Protifilo</strong> contact form.
      </p>
    </div>
  `,
  replyTo: data.Email,
};


    // Send email
    await transporter.sendMail(message);
    console.log('✅ Email sent');
    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ message: "Email sending failed", error });
  }
});

module.exports = router;
