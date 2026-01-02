import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {createReview, getCourseReviews} from "../controllers/reviewController.js";

const router  = express.Router();

router.post("/:courseId", authMiddleware, createReview);
router.get("/:courseId", getCourseReviews);

export default router;