'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const trim = true, 
    index = true, 
    required = true

const categoriaModel = new schema({
    titulo: { trim, index, required, type: String },
    descricao: { type: String },
    foto: { required, type: String },
    ativa: { required, type: Boolean },
    dataCriacao: { type: Date, default: Date.now }
}, {versionKey: false})

categoriaModel.pre('save', next => {
    if(!this.dataCriacao) 
        this.dataCriacao = new Date()
        
    next()
})

module.exports = mongoose.model('Categoria', categoriaModel)
