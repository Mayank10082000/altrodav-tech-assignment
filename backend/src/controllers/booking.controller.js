import Booking from "../models/booking.model.js";
import Activity from "../models/activity.model.js";

export const createBooking = async (req, res) => {
  try {
    const userId = req.user._id;
    const { activityId } = req.body;

    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(400).json({ message: "Activity not found" });
    }

    if (activity.isBooked) {
      return res.status(400).json({ message: "Activity is already booked" });
    }

    const booking = await Booking.create({
      userId,
      activityId,
      isBooked: true,
    });

    await booking.save();

    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const userId = req.user._id;

    const bookings = await Booking.find({ userId }).populate("activityId");

    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }

    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
