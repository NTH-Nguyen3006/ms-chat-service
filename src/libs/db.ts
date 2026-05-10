import mongoose from "mongoose";
import { MONGODB_URL } from "./env";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL!);
        console.log("Connected to MongoDB !!!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}
