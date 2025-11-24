import restaurantModel from "../models/restaurantModel.js";

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({ status: 'approved' });
    res.json({ success: true, data: restaurants });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findById(req.params.id);
    if (!restaurant) {
      return res.json({ success: false, message: "Restaurant not found" });
    }
    res.json({ success: true, data: restaurant });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Create restaurant (for restaurant owners)
const createRestaurant = async (req, res) => {
  try {
    const restaurant = new restaurantModel({
      name: req.body.name,
      ownerId: req.body.userId,
      status: 'pending', // Needs admin approval
    });
    // const restaurant = new restaurantModel({
    //   name: req.body.name,
    //   description: req.body.description,
    //   image: req.body.image,
    //   deliveryTime: req.body.deliveryTime || '20-30 min',
    //   deliveryFee: req.body.deliveryFee || 2,
    //   cuisineTypes: req.body.cuisineTypes || [],
    //   offers: req.body.offers,
    //   ownerId: req.body.ownerId || req.body.userId,
    //   status: 'pending', // Needs admin approval
    // });
    await restaurant.save();
    res.json({ success: true, message: "Restaurant created", data: restaurant });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error creating restaurant" });
  }
};

// Update restaurant
const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!restaurant) {
      return res.json({ success: false, message: "Restaurant not found" });
    }
    res.json({ success: true, message: "Restaurant updated", data: restaurant });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Delete restaurant
const deleteRestaurant = async (req, res) => {
  try {
    await restaurantModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Restaurant deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Get all restaurants (admin - includes pending/rejected)
const getAllRestaurantsAdmin = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.json({ success: true, data: restaurants });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Update restaurant status (admin)
const updateRestaurantStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const restaurant = await restaurantModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!restaurant) {
      return res.json({ success: false, message: "Restaurant not found" });
    }
    res.json({ success: true, message: "Status updated", data: restaurant });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getAllRestaurantsAdmin,
  updateRestaurantStatus,
};

