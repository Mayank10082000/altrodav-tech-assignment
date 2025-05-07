import Activity from "../models/activity.model.js";

export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ isBooked: false });

    if (activities.length === 0) {
      return res.status(404).json({ message: "No activities found" });
    }

    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    const newActivity = new Activity({
      title,
      description,
      location,
      date,
      time,
    });

    await newActivity.save();

    return res.status(201).json(newActivity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
