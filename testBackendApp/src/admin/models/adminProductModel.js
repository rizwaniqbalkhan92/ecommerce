const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  image: { type: String, required: false },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  createdDate: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: false,
  },
});

const ProductModel = new mongoose.model("Product", Product);
module.exports = ProductModel;
