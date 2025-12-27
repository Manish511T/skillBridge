import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js"
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/instructor", instructorRoutes);

app.get("/", (req, res )=>{
    res.send("SkillBridge API running");
});

export default app;