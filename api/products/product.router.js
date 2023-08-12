const {createProducts, getAllProducts} = require("./product.controller")
const router = require("express").Router();

router.post("/products/",createProducts)
router.get("/products/",getAllProducts)

module.exports = router