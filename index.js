const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");
require("dotenv").config();
const app = express();

const productsRouter = require("./router/productRouter");
const usersRouter = require("./router/userRouter");
const errorHandler = require("./middleware/error");
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Ecommerce:Ecommerce@cluster0.lls5u.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("database connection successfully"))
  .catch((err) => console.log(err));

app.use("/api/v1", productsRouter);
app.use("/api/v1", usersRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("server ok");
});
