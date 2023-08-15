const {createOrders, createOrderDetails, getOrders} = require("./order.service")

module.exports ={
    create:(req, res) => {
        const body = req.body;
        createOrders(body, (err, result) => {
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

    createDetails:(req, res) => {
        const body = req.body;
        createOrderDetails(body, (err, result) => {
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

    getAllOrders:(req, res) => {
        const id = req.params.id
        getOrders(id, (err, result) => {
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