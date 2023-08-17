const {createUser, getAllUsers, getUserById, updateUser, deleteUser, login} = require("./user.controller")
const router = require("express").Router();
const { checkToken } = require("../../auth/tokenValidation")

router.post("/users/",createUser)
router.get("/users/",checkToken,getAllUsers)
router.get("/users/:id",checkToken,getUserById)
router.put("/users/",checkToken,updateUser)
router.delete("/users/:id",checkToken,deleteUser)
router.post("/login",login);

module.exports = router