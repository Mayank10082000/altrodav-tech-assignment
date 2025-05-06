import express from "express";
import { getAllActivities } from "../controllers/activity.controller.js";

const router = express.Router();

router.get("/", getAllActivities);

export default router;
