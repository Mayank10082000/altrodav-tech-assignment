// Updated activitySeed.js (without activityId)
import mongoose from "mongoose";
import dotenv from "dotenv";
import Activity from "./src/models/activity.model.js";

dotenv.config();

// Updated sample activity data (removed activityId)
const activities = [
  {
    title: "Cricket Match: India vs Australia",
    description:
      "Exciting T20 cricket match between India and Australia at the National Stadium.",
    location: "National Cricket Stadium",
    date: new Date("2025-05-15"),
    time: "14:00",
    isBooked: false,
  },
  {
    title: "Football Tournament Finals",
    description:
      "The championship match of the city football league featuring the top two teams.",
    location: "City Sports Complex",
    date: new Date("2025-05-20"),
    time: "18:30",
    isBooked: false,
  },
  {
    title: "Movie Night: Latest Blockbuster",
    description:
      "Special screening of the latest blockbuster movie with refreshments included.",
    location: "Cineplex Mall",
    date: new Date("2025-05-10"),
    time: "20:00",
    isBooked: false,
  },
  {
    title: "Yoga in the Park",
    description:
      "Morning yoga session for all skill levels with professional instructors.",
    location: "Central City Park",
    date: new Date("2025-05-12"),
    time: "07:00",
    isBooked: false,
  },
  {
    title: "Tech Meetup: Web Development Trends",
    description:
      "Industry experts discuss the latest trends and technologies in web development.",
    location: "Innovation Hub",
    date: new Date("2025-05-18"),
    time: "15:00",
    isBooked: false,
  },
  {
    title: "Marathon: Run for Charity",
    description:
      "Annual charity marathon to raise funds for local education initiatives.",
    location: "City Riverfront",
    date: new Date("2025-06-01"),
    time: "06:30",
    isBooked: false,
  },
  {
    title: "Cooking Workshop: Italian Cuisine",
    description:
      "Learn to prepare authentic Italian dishes with a professional chef.",
    location: "Culinary Institute",
    date: new Date("2025-05-25"),
    time: "11:00",
    isBooked: false,
  },
  {
    title: "Basketball Game: City Playoffs",
    description: "Semifinal game of the city basketball league tournament.",
    location: "Downtown Arena",
    date: new Date("2025-05-22"),
    time: "19:00",
    isBooked: false,
  },
  {
    title: "Art Exhibition: Modern Artists",
    description:
      "Exhibition featuring works from contemporary local and international artists.",
    location: "City Art Gallery",
    date: new Date("2025-05-16"),
    time: "10:00",
    isBooked: false,
  },
  {
    title: "Music Concert: Rock Bands Festival",
    description:
      "Live performances by top rock bands with food stalls and merchandise.",
    location: "Outdoor Concert Arena",
    date: new Date("2025-05-30"),
    time: "17:00",
    isBooked: false,
  },
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Seed data function
const seedActivities = async () => {
  try {
    // Connect to database
    const conn = await connectDB();

    // Delete existing activities
    await Activity.deleteMany({});
    console.log("Deleted existing activities");

    // Insert new activities
    const createdActivities = await Activity.insertMany(activities);
    console.log(`${createdActivities.length} activities inserted`);

    // Log the created activities with their MongoDB IDs for reference
    console.log("Created activities with their MongoDB IDs:");
    createdActivities.forEach((activity) => {
      console.log(`${activity.title}: ${activity._id}`);
    });

    console.log("Data seeding completed!");

    // Close the connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

// Run the seed function
seedActivities();
