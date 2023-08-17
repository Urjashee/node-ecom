const {createOrders,createOrdersDetails, getOrders} = require("./order.controller")
const router = require("express").Router();
const { checkToken } = require('../../auth/tokenValidation')

router.post("/orders/",checkToken,createOrders)
router.post("/order-details",checkToken,createOrdersDetails)
router.get("/orders/:id",checkToken,getOrders)

module.exports = router