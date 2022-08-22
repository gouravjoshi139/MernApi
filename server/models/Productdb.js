// this file contains all the necessary function of our database
import mongoose from "mongoose";
// Creating Product schema
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
// Wrapping our Product Schema into Product Model
const Product = mongoose.model("products", ProductSchema);

// exporting our Product
export default Product;
