import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json"
    }
});

export default api;