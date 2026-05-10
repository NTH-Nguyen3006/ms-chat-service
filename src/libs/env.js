import dotenv from "dotenv";
dotenv.config();

const MOGODB_URL = process.env.MONGODB_URL;

export { MOGODB_URL };