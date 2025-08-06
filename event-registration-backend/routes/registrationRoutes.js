const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration"); // <-- make sure Registration model exists

// @desc    Register for an event
// @route   POST /api/register
router.post("/", async (req, res) => {
  const { name, email, eventId } = req.body;

  if (!name || !email || !eventId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newRegistration = new Registration({ name, email, eventId });
    await newRegistration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
