const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000", // dev frontend
  "http://localhost:3714", // your current dev port
  "https://my-portfolio-mern.vercel.app", // deployed frontend
];

// Middleware
const clientOrigin = process.env.CLIENT_URL;
// || /localhost/
// console.log(
//   "CLIENT_URL:",
//   process.env.CLIENT_URL || "not set — allowing localhost origins",
// );
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
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

const PORT = process.env.PORT;
// || 5000
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
