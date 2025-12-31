import User from "../models/User.js";

export const getAllUsers = async (req, res)=>{
    const users = await User.find().select("-password");
    res.json(users);
}

export const getPendingInstructors = async(req, res)=>{
    const instructors = await User.find({
        role:"instructor",
        isApproved: false,
    }).select("-password");

    res.json(instructors);
}

export const approveInstructor = async (res, req)=>{
    const user = await User.findById(req.params.id);
    
    if(!user || user.role !== "instructor"){
        return res.status(404).json({message:"Instructor not found"});
    }

    user.isApproved = true;
    await user.save();
    
    res.json({message:"Instructor approved"});
};
