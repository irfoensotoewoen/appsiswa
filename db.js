require('dotenv').config()

const mysql = require('mysql2')

const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.BD_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
})

const poolPromise = pool.promise()

module.exports = poolPromise