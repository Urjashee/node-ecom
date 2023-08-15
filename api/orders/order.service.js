const pool = require("../../config/database")

module.exports = {
    createOrders: (data, callBack) => {
        pool.query(
            `insert into orders(billing_address, user_id, amount) values (?,?,?)`,
            [
                data.address,
                data.user_id,
                data.amount,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    createOrderDetails: (data, callBack) => {
        pool.query(
            `insert into order_details(order_id, product_id, quantity) values (?,?,?)`,
            [
                data.order_id,
                data.product_id,
                data.quantity
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    
    getOrders: (id, callBack) => {
        pool.query(
            `select * from orders where order_id=?`,
            [id],
            (error, results, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
}