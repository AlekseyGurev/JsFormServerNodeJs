const Pool = require('pg').Pool

const pool = new Pool(
    {
        user:"postgres",
        password:"alleksey",
        host:"localhost",
        port:5432,
        database: "reg_data"
    }
)

module.exports = pool