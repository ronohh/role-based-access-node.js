import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middlewares
//Routes

//start Server
const PORT = process.env.PORT || 7002;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})