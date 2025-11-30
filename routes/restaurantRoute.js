import express from "express";
import { authMiddleware, adminMiddleware } from "../middleware/auth.middleware.js";
import { createRestaurant, deleteRestaurant, getAllRestaurants, getAllRestaurantsAdmin, getRestaurantById, updateRestaurant, updateRestaurantStatus } from "../controllers/restaurantController.js";

const restaurantRouter = express.Router();

// Public routes
restaurantRouter.get("/all", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurantById);

// Restaurant owner routes
restaurantRouter.post("/create", createRestaurant);
restaurantRouter.put("/update/:id", authMiddleware, updateRestaurant);
restaurantRouter.delete("/:id", authMiddleware, deleteRestaurant);

// Admin routes
restaurantRouter.get("/admin/all", adminMiddleware, getAllRestaurantsAdmin);
restaurantRouter.put("/admin/status/:id", adminMiddleware, updateRestaurantStatus);

export default restaurantRouter;

