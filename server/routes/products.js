// A seprate Routes file for all endpoints
import express from "express";
// importing our mongodb models
import Products from "../models/Productdb.js";

const router = express.Router();

// end point for fetching all Products
router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

// end point for Adding new product
router.post("/addProduct", async (req, res) => {
  const product = new Products({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    const savedPost = await product.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// end point to fetch Specific Product data
router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.json(product);
    console.log(req.query);
  } catch (err) {
    res.json({ message: err });
  }
});

// end point Deleting the Product
router.delete("/deleteProduct/:productId", async (req, res) => {
  try {
    const RemovePost = await Products.findByIdAndRemove(req.params.productId);
    res.json(RemovePost);
  } catch (error) {
    res.json({ message: err });
  }
});

// end point for Updating the  product
router.put("/updateProduct/:id", async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    res.json(updatedProduct);
    console.log(" updated successfully");
  } catch (error) {
    res.json({ message: err });
  }
});

export default router;
