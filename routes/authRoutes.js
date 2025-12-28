const express = require("express");
const router = express.Router();

// Example POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // TODO: Authenticate user
  res.json({ message: "Login successful", user: { email } });
});

module.exports = router;
