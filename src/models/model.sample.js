const connection = require('../config/db')

const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM message`, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const findOne = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM message WHERE id = ?`,
      id,
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }
    )
  })
}

const search = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM message WHERE message LIKE ?`,
      `%${query}%`,
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }
    )
  })
}

const create = (datas) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO message SET ?`, datas, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = { findAll, findOne, search, create }
