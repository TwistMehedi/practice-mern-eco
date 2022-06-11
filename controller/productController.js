const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

exports.getAllProduct = catchAsyncError(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apifeatures = new ApiFeatures(await Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apifeatures.query;
  // console.log(products);
  res.status(201).json({
    msg: "server ready",
    products,
    productCount,
  });
});

exports.createProducts = catchAsyncError(async (req, res) => {
  const product = await Product.create(req.body);
  // console.log(product);
  res.status(201).json({
    success: true,
    product,
  });
});

exports.getAProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  // console.log(id);

  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
});

exports.deleteProduct = catchAsyncError(async (req, res) => {
  let product = await Product.findById(req.params.id);
  // console.log(id);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }

  await product.remove();
  res.status(200).json({
    success: true,
    massage: "product deleted successfully",
  });
});

exports.updateProduct = catchAsyncError(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    massage: "your product  updated",
    product,
  });
});
