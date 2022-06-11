const express = require("express");
const {
  getAllProduct,
  createProducts,
  getAProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");
const router = express.Router();
router.route("/products").get(getAllProduct);
router.route("/product").post(createProducts);
router.route("/product/:id").get(getAProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").put(updateProduct);

module.exports = router;
