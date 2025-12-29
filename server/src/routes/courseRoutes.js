import express from "express";
import authMiddleWare from "../middlewares/authMiddleware.js";
import allowRoles from "../middlewares/roleMiddleware.js";
import {
    createCourse,
    getPublishedCourses,
    updateCourse,
    deleteCourse
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getPublishedCourses); //for public
router.post("/", authMiddleWare, allowRoles("instructor",createCourse));
router.put("/:id", authMiddleWare, allowRoles("instructor"), updateCourse);
router.delete("/:id", authMiddleWare, allowRoles("instructor"), deleteCourse);

export default router;
