const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Olá Mundão!')
})

app.post('/', (req, res) => {
    res.status(201).send('Criado')
})

app.put('/', (req, res) => {
    res.status(202).send('Atualizado')
})

app.delete('', (req, res) => {
    res.status(204).send('Excluído')
})

app.listen(3000, () => {
    console.log('Servidor API iniciado na porta 3000.')
})