const express = require("express"); // Import Express (a framework for building servers)
const bodyParser = require("body-parser"); // Helps process form data (like login forms or blog post submissions)
const app = express(); // Create an Express app (your server)

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Tells your server to process form inputs
app.use(express.static("public")); // Serves static files (like CSS, images, and JS)
app.set("view engine", "ejs"); // Use EJS templates (to make HTML dynamic)

// Routes
const adminRoutes = require("./routes/admin"); // Admin-related routes (like adding posts)
const frontendRoutes = require("./routes/frontend"); // Frontend routes (homepage, about page, etc.)

app.use("/admin", adminRoutes); // Prefix all admin routes with "/admin"
app.use("/", frontendRoutes); // Prefix all frontend routes with "/"

// Start the server
app.listen(3000, () => { // Starts the server on port 3000
  console.log("CMS running at http://localhost:3000"); // Logs where to access the site
});
