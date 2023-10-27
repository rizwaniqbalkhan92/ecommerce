const express = require("express");
const {
  createProduct,
  updateProduct,
  allProducts,
  deleteProduct,
} = require("../controllers/adminProducts");
const router = express.Router();
const upload=require('../controllers/imageUpload')
router.get("/all", allProducts);
router.post("/add",upload.single('image'), createProduct);
router.post("/update", updateProduct);
router.post("/delete", deleteProduct);

module.exports = router;
