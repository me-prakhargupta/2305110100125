import { getDepots, getVehicles } from "./depot.service.js";
import optimizeSchedule from "../algorithms/knapsack.js";

export async function generateSchedule(depotId) {
    try {
        const depotsResponse = await getDepots();
        const vehiclesResponse = await getVehicles();

        const depot = depotsResponse.depots.find(
            depot => depot.ID === Number(depotId)
        );

        if (!depot) {
            throw new Error("Depot not found.");
        }

        const availableHours = depot.MechanicHours;

        const tasks = vehiclesResponse.vehicles.map(vehicle => ({
            id: vehicle.TaskID,
            duration: vehicle.Duration,
            score: vehicle.Impact
        }));

        return optimizeSchedule(tasks, availableHours);

    } catch (error) {
        throw error;
    }
}