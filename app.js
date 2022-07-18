const mongoose = require("mongoose");

const { Custom } = require("./models"); //models의 exports 값 모두 가져옴 -> 그 중 Post만 골라먹기
const { Seller } = require("./models");
const { Product } = require("./models");
mongoose.connect("mongodb://localhost:27017/myapp");

mongoose.connection.on("connected", () => {
  console.log("연결 완료!");
});

async function main() {
  await Custom.create({
    customerId: 1,
    name: "Park",
    age: 20,
    gender: "Men",
    productId: 1,
  });

  await Custom.create({
    customerId: 2,
    name: "Kim",
    age: 23,
    gender: "Women",
    productId: 1,
  });

  await Custom.create({
    customerId: 3,
    name: "Lee",
    age: 32,
    gender: "Men",
    productId: 2,
  });

  await Seller.create({
    sellerId: 1,
    name: "Amazon",
    productId: 1,
  });

  await Seller.create({
    sellerId: 2,
    name: "Ebay",
    productId: 1,
  });

  await Seller.create({
    sellerId: 3,
    name: "Google",
    productId: 2,
  });

  await Product.create({
    productId: 1,
    name: "pencil",
    price: 1000,
  });

  await Product.create({
    productId: 2,
    name: "erazer",
    price: 500,
  });
}

main();

// async function deleteFun() {
//   return await Custom.deleteOne({ name: "Park" });
// }

// deleteFun().then((res) => {
//   console.log(res);
// });

// async function updateFun() {
//   return await Custom.findOneAndUpdate("Park", { gender: "Women" });
// }
// updateFun().then((res) => {
//   console.log(res);
// });
