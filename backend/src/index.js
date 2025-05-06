import express from "express";
import authRoutes from "./routes/auth.route.js";
import bookingsRoutes from "./routes/booking.route.js";
import activitiesRoutes from "./routes/activity.route.js";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/activities", activitiesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});
