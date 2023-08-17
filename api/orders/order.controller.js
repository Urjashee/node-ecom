const {create, createOrderDetails, getOrders} = require("./order.service")

module.exports ={
    createOrders:(req, res) => {
        const body = req.body;
        create(body, (err, result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message:"ERROR",
                    data:err
                })
            }
            // return res.status(200).json({
            //     success: true,
            //     message:"SUCCESS",
            //     result: body.products
            // })
            body.products.map((item)=>{
                item.order_id=result.insertId
                createOrderDetails(item, (err, results) => {
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
            })
        })
    },

    createOrdersDetails:(req, res) => {
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

    getOrders:(req,res) =>{
        const id = req.params.id
        getOrders(id, (err, results) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message:"ERROR",
                    data:err
                })
            }
            return res.status(200).json({
                success: true,
                message:"SUCESS",
                data:results
            })
        })
    },
}