import express from "express";
import { Log } from "./logger/index.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server Running");
});


app.listen(3000, async () => {
    console.log("Server Started");
    
    await Log(
        "backend",
        "info",
        "config",
        "Server started on port 3000"
    );
});