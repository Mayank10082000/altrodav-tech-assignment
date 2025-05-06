import express from "express";
import {
  createBooking,
  getMyBookings,
} from "../controllers/booking.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-booking", protectRoute, createBooking);
router.get("/my-bookings", protectRoute, getMyBookings);

export default router;
