const express = require("express");
const router = express.Router();

// Example POST /api/contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // TODO: Save to database or send email
  res.json({ message: "Contact received", data: { name, email, message } });
});

module.exports = router;
