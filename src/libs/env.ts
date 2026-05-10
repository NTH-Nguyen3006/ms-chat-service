import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL: string | undefined = process.env.MONGODB_URL;
const JWT_SECRET: string | undefined = process.env.ACCESS_TOKEN_SECRET;
const PORT = process.env.PORT || 5000;



export { MONGODB_URL, PORT };