const Product = require("../models/products");
const User = require("../models/user");

exports.getProducts = async (req, res, next) => {
  const allAddedProducts = await Product.find();
  res.send(allAddedProducts);
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      res.json({ ok: true, product: product });
    })
    .catch((err) => {
      res.json({ ok: false, message: "Some error occur" });
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.prodId;
  const userId = req.body.userId;
  console.log("prodid hai yaar", prodId, userId);
  Product.findById(prodId).then((product) => {
    return User.findById(userId)
      .then((user) => {
        user.addToCart(product);
        // console.log("user hai ye", user);
        user
          .populate("cart.items.productId")
          // .execPopulate()
          .then((user) => {
            const products = user.cart.items;
            // console.log("ho gaya yaar", products);
            return res.json({ ok: true, products: products });
          })
          .catch((err) => {
            res.json({ ok: false, message: "An error occured!!" });
          });
      })
      .catch((err) => {
        res.json({ ok: false, message: "An error occured!!" });
      });
  });
  // .then((result) => {
  //   console.log("");
  // });
};

exports.getCartProducts = (req, res, next) => {
  const userId = req.body.userData;
  User.findById(userId)
    .then((user) => {
      // console.log("user hai ye", user);
      user
        .populate("cart.items.productId")
        .then((user) => {
          const products = user.cart.items;
          // console.log("ho gaya yaar", products);
          return res.json({ ok: true, products: products });
        })
        .catch((err) => {
          res.json({ ok: false, message: "An error occured!!" });
        });
    })
    .catch((err) => {
      res.json({ ok: false, message: "An error occured!!" });
    });
};
