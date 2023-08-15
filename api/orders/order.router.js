const {create, createDetails, getAllOrders} = require("./order.controller")
const router = require("express").Router();
const { checkToken } = require("../../auth/tokenValidation")

router.post("/orders/", checkToken, create)
router.post("/order-details/", checkToken, createDetails)
router.get("/orders/:id", checkToken, getAllOrders)

module.exports = router