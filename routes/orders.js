const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render("index", {
    title: "Shop",
    isShop: true
  });
})

router.get("/cart", (req, res) => {
  res.render("cart", {
    title: "Shopping Cart",
    isCart: true
  });
});

module.exports = router;