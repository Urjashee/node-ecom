const { genSaltSync, hashSync, compareSync} = require("bcrypt")
const {create, getUsers, updateUser, deleteUsers} = require("./user.service")

module.exports ={
    createUser:(req, res) => {
        const body = req.body;
        const salt = genSaltSync(10,'')
        body.password = hashSync(body.password, salt)
        create(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message:"ERROR",
                    data:err
                })
            }
            return res.status(200).json({
                success: true,
                message:"SUCCESS"
            })
        })
    },

    getAllUsers:(req, res) => {
        getUsers((err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message:"ERROR",
                    data:err
                })
            }
            return res.status(200).json({
                success: true,
                message:"SUCCESS",
                data:result
            })
        })
    },

    updateUser:(req, res) => {
        const body = req.body
        updateUser(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message:"ERROR",
                    data:err
                })
            }
            return res.status(200).json({
                success: true,
                message:"UPDATED SUCCESSFULLY",
                data:result
            })
        })
    },

    deleteUser:(req,res) =>{
        const id = req.params.id
        deleteUsers(id, (err, results) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message:"ERROR",
                    data:err
                })
            }
            return res.status(200).json({
                success: true,
                message:"DELETED SUCCESSFULLY",
                data:results
            })
        })
    }
}