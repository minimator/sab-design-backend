const express = require("express");
const router = express.Router();

// Example GET /api/projects
router.get("/", (req, res) => {
  // TODO: Fetch projects from DB
  res.json({ projects: [] });
});

module.exports = router;
