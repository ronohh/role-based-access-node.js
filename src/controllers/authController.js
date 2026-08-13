import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import User from "../models/User.js";

const register = async (req, res) => {
    try{
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User ({ username, password : hashedPassword, role});
        await newUser.save();
        return res.status(201).json({success: true, message:"user registered succesfully"})
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({success: false, message:"error registering"})
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if(!user){
            return res.status(404).json({success: false, message:"user not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({success: false, message:"invalid credentials"})
        }

        const token = jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.status(200).json({success: true, token})
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({success: false, message:"error logging in"})
    }
};

export { register, login };