import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  rating: { type: Number, default: 4.5 },
  deliveryTime: { type: String, default: '20-30 min' },
  deliveryFee: { type: Number, default: 2 },
  cuisineTypes: [{ type: String }],
  isOpen: { type: Boolean, default: true },
  offers: { type: String },
  ownerId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'pending'
  },

}, { timestamps: true });

const restaurantModel = mongoose.models.restaurant || mongoose.model("restaurant", restaurantSchema);

export default restaurantModel;

