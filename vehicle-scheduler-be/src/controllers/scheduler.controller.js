import { generateSchedule } from "../services/scheduler.service.js";

export async function scheduleVehicles(req, res) {
    try {
        const { depotId } = req.query;

        if (!depotId) {
            return res.status(400).json({
                success: false,
                message: "depotId is required."
            });
        }

        const schedule = await generateSchedule(Number(depotId));

        return res.status(200).json({
            success: true,
            data: schedule
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};