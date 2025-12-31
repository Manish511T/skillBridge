import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import allowRoles from "../middlewares/roleMiddleware.js";
import {createLesson} from "../controllers/lessonController.js";

const router = express.Router();

router.post("/", authMiddleware, allowRoles("instructor"), createLesson);

export default router;
