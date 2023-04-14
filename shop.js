const path = require("path");

const express = require("express");
const Product = require("../models/product");

const shopController = require("../controller/shop");

const router = express.Router();
const userAuthenticate = require("../middleware/auth");

router.get("/", userAuthenticate.authenticate, shopController.getIndex);

router.get(
  "/products",
  userAuthenticate.authenticate,
  shopController.getProducts
);

router.get(
  "/product/:productId",
  userAuthenticate.authenticate,
  shopController.getProduct
);

router.get("/cart", userAuthenticate.authenticate, shopController.getCart);

router.post("/cart", userAuthenticate.authenticate, shopController.postCart);

router.get(
  "/getAllProduct",
  userAuthenticate.authenticate,
  shopController.getAllProducts
);

router.get("/orders", userAuthenticate.authenticate, shopController.getOrders);

router.post(
  "/create-order",
  userAuthenticate.authenticate,
  shopController.postOrder
);

router.post(
  "/cart-delete-item",
  userAuthenticate.authenticate,
  shopController.postCartDelete
);

module.exports = router;
