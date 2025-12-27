import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import allowRoles from "../middlewares/roleMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/users",
    authMiddleware,
    allowRoles("admin"),
    async(req, res)=>{
        const users = await User.find().select("-password");
        res.json(users);
    }
);

router.put("/approve-instructor/:id",
    authMiddleware,
    allowRoles("admin"),
    async(req, res)=>{
        const user = await User.findById(req.params.id);

        if(!user || user.role !=="instructor"){
            return res.status(400).json({message: "Invalid instructor"});
        }

        user.isApproved = true;
        await user.save();

        res.json({message:"Instructor approved"});
    }
);

export default router;
