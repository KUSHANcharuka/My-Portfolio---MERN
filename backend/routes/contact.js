const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact - save a new contact message
router.post("/", async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const { firstName, lastName, email, mobile, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      console.error("Validation failed - missing required fields");
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      mobile,
      message,
    });
    await contact.save();
    console.log("Contact saved successfully:", contact);

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err.message);
    console.error("Error stack:", err.stack);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// GET /api/contact - retrieve all messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
