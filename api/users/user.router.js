const {createUser, getAllUsers, updateUser, deleteUser} = require("./user.controller")
const router = require("express").Router();

router.post("/users/",createUser)
router.get("/users/",getAllUsers)
router.put("/users/",updateUser)
router.delete("/users/:id",deleteUser)

module.exports = router