import { Router } from "express";
import { scheduleVehicles } from "../controllers/scheduler.controller.js";

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Scheduler Running"
    });
});

router.get("/schedule", scheduleVehicles);

export default router;