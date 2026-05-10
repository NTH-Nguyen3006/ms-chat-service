import mongoose from "mongoose";
import { MOGODB_URL } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(MOGODB_URL);
        console.log("Connected to MongoDB !!!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }

}