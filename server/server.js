const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourgmail@gmail.com",
        pass: "your_app_password",
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <yourgmail@gmail.com>`,
      to: "yourgmail@gmail.com",
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Email failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));