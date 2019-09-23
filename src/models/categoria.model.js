'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const trim, index, required = true

const categoriaModel = new schema({
    titulo: { trim, index, required, type: String },
    descricao: { type: String },
    foto: { required, type: String },
    ativa: { required, type: Boolean },
    dataCriacao: { type: Date, default: Date.now }
}, {versionKey: false})

categoriaModel.pre('save', next => {
    let now = new Date()

    if(!this.dataCriacao) 
        this.dataCriacao = now
        
    next()
})