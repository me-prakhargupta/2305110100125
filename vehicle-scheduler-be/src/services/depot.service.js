import api from "../config/api.js";
import { ENDPOINTS } from "../constants/endpoints.js";

export async function getDepots() {
    const response = await api.get(ENDPOINTS.GET_DEPOTS);
    return response.data;
};

export async function getVehicles() {
    const response = await api.get(ENDPOINTS.GET_VEHICLES);
    return response.data;
};