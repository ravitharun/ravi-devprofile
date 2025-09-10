const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:'tr565003@gmail.com',          // your Gmail
    pass: 'ktdkgfcscqcpdmsh' // your Gmail App Password
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
      text: "This is a message from the Protifilo contact form.",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.Name}</p>
          <p><strong>Email:</strong> ${data.Email}</p>
          <p><strong>Subject:</strong> ${data.Subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #ffffff; padding: 10px; border-left: 4px solid #3498db; color: #333;">
            ${data.Message}
          </p>
          <hr />
          <p style="font-size: 0.9em; color: #777;">This email was sent via the <strong>Protifilo</strong> contact form.</p>
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
