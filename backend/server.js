const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
const clientOrigin = process.env.CLIENT_URL || "http://localhost:3714";
// Allow CORS for localhost and deployed frontend
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests from localhost and no origin (like mobile apps)
      if (
        !origin ||
        origin.includes("localhost") ||
        origin.includes("127.0.0.1") ||
        origin.includes("https://my-portfolio-mern-ebon.vercel.app")
      ) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all for now, restrict as needed
      }
    },
  }),
);
app.use(express.json());

// Routes
app.use("/api/contact", require("./routes/contact"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected")) // || "mongodb://localhost:27017/portfolio"
  .catch((err) => console.error(" MongoDB error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
