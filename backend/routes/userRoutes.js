const express = require("express");
const router = express.Router();

// Register route
router.post("/register", (req, res) => {
  console.log("Received a request at /register");
  res.json({ message: "User registered successfully!" });
});

// Login route
router.post("/login", (req, res) => {
  console.log("Received a request at /login");
  res.json({ message: "User logged in successfully!" });
});

module.exports = router;
