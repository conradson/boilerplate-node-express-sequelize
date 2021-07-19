const { Op } = require('sequelize')
const messageModel = require('../models/model.sample')
messageModel.sync()

const findAll = async (req, res) => {
  try {
    const results = await messageModel.findAll()
    res.status(200).json(results)
  } catch (err) {
    res.status(500).json(err)
  }
}

const findOne = async (req, res) => {
  const { id } = req.params
  try {
    const result = await messageModel.findOne({
      where: {
        id: id,
      },
    })
    if (result.length !== 0) {
      res.status(200).json({
        message: 'Success',
        result: result,
      })
    } else {
      res.status(404).json({ message: `No Message found with id ${id}` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const search = async (req, res) => {
  const { query } = req.params
  try {
    const results = await messageModel.findAll({
      where: {
        message: {
          [Op.substring]: query,
        },
      },
    })
    if (results.length !== 0) {
      res.status(200).json({
        message: 'Success',
        results,
      })
    } else {
      res.status(404).json({ message: 'Nothing found' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const create = async (req, res) => {
  const datas = req.body
  try {
    const result = await messageModel.create(datas)
    res.status(201).json({
      message: 'Created',
      result,
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const datas = req.body
  try {
    const message = await messageModel.findOne({
      where: {
        id: id,
      },
    })
    if (message.length !== 0) {
      message.update(datas)
      res.sendStatus(204)
    } else {
      res.status(404).json({ message: `No Message found with id ${id}` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  findAll,
  findOne,
  search,
  create,
  update,
}
