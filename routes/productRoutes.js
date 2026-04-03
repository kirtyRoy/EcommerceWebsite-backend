const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// Public routes
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

// Admin routes
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;