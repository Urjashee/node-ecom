const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
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
                data.quantity,
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
            `select * from orders where user_id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    getOrderDetails: (id, callBack) => {
        pool.query(
            `SELECT * FROM order_details 
            INNER JOIN products 
            ON order_details.product_id = products.product_id 
            WHERE order_id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    }
}