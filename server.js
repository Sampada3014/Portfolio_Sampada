const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());  // Allow cross-origin requests


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself to test
    subject: "Test Email",
    text: "This is a test email.",
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);  // Log the error in the console
    } else {
      console.log("Email sent:", info.response);  // Log the success message
    }
  });
  
  

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email address
    subject: `Message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);  // Log the error in the server console
      return res.status(500).send(error.toString());  // Send the error message to frontend
    }
    console.log("Email sent:", info.response);  // Log success
    res.status(200).send("Message sent: " + info.response);  // Send success message to frontend
  });
  
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
