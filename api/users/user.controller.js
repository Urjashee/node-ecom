const { genSaltSync, hashSync, compareSync} = require("bcrypt")
const {create, getUsers, updateUser, deleteUsers, getUserByUserEmail} = require("./user.service")
const { sign } = require("jsonwebtoken")

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
    },

    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            } if (!results) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Invalid email or password"
                })
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({result:results}, process.env.JSON_KEY,{
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    success: true,
                    message: "Login success",
                    data:jsontoken
                });
            } else {
                return res.status(500).json({
                    success: false,
                    message: "Invalid email or password",
                });
            }
        });
    }
}