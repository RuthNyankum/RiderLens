import express from "express";
import cors from "cors";

const app = express();

/**
 * Middleware
 */
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

/**
 * Root route (human check)
 */
app.get("/", (req, res) => {
  res.send("RiderLens API is running 🚀");
});

/**
 * Health check route (frontend / deployment check)
 */
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "API is healthy 🚀" });
});

export default app;
