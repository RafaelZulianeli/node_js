const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Olá Mundão!')
})

app.listen(3000, () => {
    console.log('Servidor API iniciado na porta 3000.')
})