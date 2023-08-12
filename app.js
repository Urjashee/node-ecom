require("dotenv").config();
const express = require('express'); //import
const app = express(); //initialize
const userRouter = require("./api/users/user.router")

app.use(express.json());

app.use("/api",userRouter)

app.get("/", (req, res) => {
    res.send("Hello Worlds!")
});//listen to end points

app.listen(3000, () => {
    console.log("Server is running:3000");
})