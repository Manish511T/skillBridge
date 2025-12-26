import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (userId)=>{
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

export const register = async (req, res)=>{
    const {name, email, password, role} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message:"All field required"});
    }

    const exitingUser = await User.findOne({email});
    if(exitingUser) return res.status(400).json({message: "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email, 
        password: hashedPassword,
        role: role||"student",
        isApproved: role ==="instructor"? false: true,  
    });

    res.status(201).json({
        message:"User registered",
        token: generateToken(user._id)
    });
};

const login = async(req, res)=>{
    const {email, password} = req.body;
    
}