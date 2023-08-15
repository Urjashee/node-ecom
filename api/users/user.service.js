const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(first_name, last_name, email, password, address, phone_no) values (?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.address,
                data.phone_no
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    getUsers: callBack => {
        pool.query(
            `select user_id, first_name, last_name, email, address, phone_no from users`,
            [],
            (error, results, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    updateUser: (data, callBack) => {
        pool.query(
            `update users set first_name=?, last_name=?, email=?, address=?, phone_no=? where user_id=?`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.address,
                data.phone_no,
                data.id
            ],
            (error, results, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },

    deleteUsers: (id, callBack) => {
        pool.query(
            `delete from users where user_id=?`,
            [id],
            (error, results, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },

    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * FROM users where email = ?`,
            [email],
            (error, results, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
}