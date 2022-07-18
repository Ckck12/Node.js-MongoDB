const { Schema } = require("mongoose");

const Customers = new Schema(
  {
    customerId: Number,
    name: String,
    age: Number,
    gender: String,
    productId: Number,
  },
  {
    timestamps: true,
  }
);

const Sellers = new Schema(
  {
    sellerId: Number,
    name: String,
    productId: Number,
  },
  {
    timestamps: true,
  }
);

const Products = new Schema(
  {
    productId: Number,
    name: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = Customers;
module.exports = Sellers;
module.exports = Products;
