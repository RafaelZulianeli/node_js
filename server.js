'use strict'

const app = require('./src/bin/express')
const variables = require('./src/bin/configuration/variables')

const port = variables.Api.port
app.listen(port, ()=> console.log(`API inicializada na porta ${port}`))