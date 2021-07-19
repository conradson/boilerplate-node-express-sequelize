const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

module.exports = sequelize.define('message', {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  optional: {
    type: DataTypes.STRING,
    allowNull: true,
    default: null,
  },
})
