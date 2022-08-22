import express from "express";
import cors from "cors";
import "dotenv/config";


import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5007;

app.listen(PORT, (req, res) => console.log("Listening at port:", PORT));
