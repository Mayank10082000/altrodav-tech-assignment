import express from "express";
import {
  createBooking,
  getMyBookings,
} from "../controllers/booking.controller.js";

import { protectRoute } from "../middlewares/auth.middleware.js";
import { createBookingValidator } from "../validators/booking.validator.js";

const router = express.Router();

router.post(
  "/create-booking",
  protectRoute,
  createBookingValidator,
  createBooking
);
router.get("/my-bookings", protectRoute, getMyBookings);

export default router;
