import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import restaurantRouter from "./routes/restaurantRoute.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 4005;

app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// API endpoint
app.use("/api/restaurant", restaurantRouter);

app.get("/api/restaurant", (req, res) => {
  res.send("Restaurant Service API is Working");
});

app.listen(port, () => {
  console.log(`Restaurant Service Started on http://localhost:${port}`);
});

