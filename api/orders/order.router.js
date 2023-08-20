const {createOrders,createOrdersDetails, getOrders, getOrderDetails} = require("./order.controller")
const router = require("express").Router();
const { checkToken } = require('../../auth/tokenValidation')

router.post("/orders/",checkToken,createOrders)
router.post("/order-details",checkToken,createOrdersDetails)
router.get("/orders/:id",checkToken,getOrders)
router.get("/order-details/:id",checkToken,getOrderDetails)

module.exports = router