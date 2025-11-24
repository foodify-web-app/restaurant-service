import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Restaurant Service DB Connected");
  } catch (error) {
    console.error("Restaurant Service DB Connection Error:", error);
    process.exit(1);
  }
};

