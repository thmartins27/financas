const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config(
    { path: '/mnt/NALGRIM/projetos/financas/backend/src/.db.env' }
)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dateStrings: true
})

module.exports = connection