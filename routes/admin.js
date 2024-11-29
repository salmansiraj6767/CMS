const express = require("express");
const router = express.Router(); // Create a "mini app" for admin routes

// Admin Dashboard
router.get("/", (req, res) => {
  res.render("admin/dashboard"); // Show the admin dashboard (HTML file)
});

// Add New Post (GET request)
router.get("/add-post", (req, res) => {
  res.render("admin/add-post"); // Show a form to add a new post
});

// Save New Post (POST request)
router.post("/add-post", (req, res) => {
  const title = req.body.title; // Get the "title" input from the form
  const content = req.body.content; // Get the "content" input from the form

  // Logic to save the post in the database (or a file)
  console.log(`New Post: ${title}, Content: ${content}`);

  res.redirect("/admin"); // Redirect back to the admin dashboard
});

module.exports = router; // Export this file so `app.js` can use it
