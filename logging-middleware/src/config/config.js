import dotenv from "dotenv";

dotenv.config();

export const config = {
    LOG_API_URL: process.env.LOG_API_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
};