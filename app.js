require("dotenv").config();
const express = require('express'); //import
const app = express(); //initialize
const cors = require('cors');
const userRouter = require("./api/users/user.router")
const productRouter = require("./api/products/product.router")
const orderRouter = require("./api/orders/order.router")
app.use(cors());
app.use(express.json());

app.use("/api",userRouter)
app.use("/api",productRouter)
app.use("/api",orderRouter)

app.get("/", (req, res) => {
    res.send("Hello Worlds!")
});//listen to end points

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running:", process.env.APP_PORT);
})