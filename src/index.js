const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/index')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', routes)

const port = process.env.SERVER_PORT || 8000
app.listen(port, () => {
  console.log(`Connected, listen on port ${port}`)
})
