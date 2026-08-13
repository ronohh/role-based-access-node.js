import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import User from "../models/userModel.js";

const register = async (req, res) => {
    try{
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User ({ username, password : hashedPasword, role})
        await newUser.save();
        return res.status(201).json({success: true, message:"user registered succesfully"})
    } catch (error) {
        return res.status(500).json({success: false, message:"error registering"})
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
};

export { register, login };