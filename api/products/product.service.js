const pool = require("../../config/database")

module.exports = {
    createProduct: (data, callBack) => {
        pool.query(
            `insert into products(name, price, stock, description, image) values (?,?,?,?,?)`,
            [
                data.name,
                data.price,
                data.stock,
                data.description,
                data.image
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    getProducts: callBack => {
        pool.query(
            `select * from products`,
            [],
            (error, results, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    }
}