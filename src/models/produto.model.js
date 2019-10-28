'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const trim = true, 
    index = true, 
    required = true

const produtoModel = new schema({
    nome: { trim, index, required, type: String },
    descricao: { required, type: String },
    foto: { required, type: String },
    preco: { required, type: Number },
    ativo: { required, type: Boolean },
    dataCriacao: { type: Date, default: Date.now }
}, {versionKey: false})

produtoModel.pre('save', next => {
    if(!this.dataCriacao) 
        this.dataCriacao = new Date()
        
    next()
})

module.exports = mongoose.model('Produto', produtoModel)
