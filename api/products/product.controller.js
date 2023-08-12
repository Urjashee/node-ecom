const {createProduct, getProducts} = require("./product.service")

module.exports ={
    createProducts:(req, res) => {
        const body = req.body;
        createProduct(body, (err, result) => {
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

    getAllProducts:(req, res) => {
        getProducts((err, result) => {
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
}