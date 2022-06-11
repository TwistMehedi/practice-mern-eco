const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, " Enter your product name"],
    trim: true,
  },
  // description: {
  //   type: String,
  //   required: [true, "Enter your product description"],
  // },
  // price: {
  //   type: Number,
  //   required: [true, "Enter your product price"],
  //   maxLength: [8, "Price cannot exceed 8 characters"],
  // },
  // rating: {
  //   type: Number,
  //   default: 0,
  // },
  // image: [
  //   {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // category: {
  //   type: String,
  //   required: [true, "Enter your product category"],
  // },
  // stock: {
  //   type: Number,
  //   required: [true, "Enter your product stock"],
  //   maxLength: [4, " Stock cannot exceed 4 number"],
  // },
  // numOfReviews: {
  //   type: Number,
  //   default: 0,
  // },
  // reviews: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // createAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
