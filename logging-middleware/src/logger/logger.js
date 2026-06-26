import axios from "axios";
import { config } from "../config/config.js";

export async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            config.LOG_API_URL,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${config.ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
    }
};