require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

//  Connect to MongoDB (ONLY ONCE)
connectDB();

//  Middleware
app.use(express.json());
app.use(cors({
  origin: "https://sab-design-frontend.onrender.com"
}));

//  Health check (important for Render)
app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});

//  API routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

//  Port (Render provides PORT automatically)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
