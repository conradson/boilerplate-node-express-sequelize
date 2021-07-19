require('dotenv').config()
const mysql = require('mysql2')

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}
const connection = mysql.createPool(config)

connection.getConnection((err, connection) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Database connected')
  }
})

module.exports = connection
