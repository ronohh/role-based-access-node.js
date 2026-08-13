import express from "express";
import dotenv from "dotenv";
import connectDB from "./config_db/connection.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

//middlewares
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);

//start Server
const PORT = process.env.PORT || 7002;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})