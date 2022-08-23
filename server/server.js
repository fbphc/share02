import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./helpers/dbConnect.js"
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5007;

/* --- DATABASE --- */
connectDB()
mongoose.connection.on("open", ()=>{
    console.log("db is connected")
})

mongoose.connection.on("error", (error)=>{
    console.log("Connection to MongoDB has failed", error.message)
})

/* --------------- */

app.get("/test", (req,res) =>{
    res.status(200).json("testing route")
})

app.listen(PORT, (req, res) => console.log("Listening at port:", PORT));
