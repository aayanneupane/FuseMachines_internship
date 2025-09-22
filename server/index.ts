import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";




dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// after app.use(cors())
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pipeline-tracker";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected");
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection error:", err));


   