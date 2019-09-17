'use strict'

const app = require('./bin/express')
const variables = require('./bin/configuration/variables')

const port = variables.Api.port
app.listen(port, ()=> console.log(`API inicializada na porta ${port}`))