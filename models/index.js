const mongoose = require("mongoose");
const Customers = require("./schemas/board");
const Sellers = require("./schemas/board");
const Products = require("./schemas/board");

exports.Custom = mongoose.model("Custom", Customers);
exports.Seller = mongoose.model("Seller", Sellers);
exports.Product = mongoose.model("Product", Products);
