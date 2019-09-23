const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const variables = require('./configuration/variables')

const categoriaRouter = require('../routes/categoria.route')
const produtoRouter = require('../routes/produto.route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

mongoose.connect(variables.Database.connection)

app.use('/api/categoria', categoriaRouter)
app.use('/api/produto', produtoRouter)

module.exports = app