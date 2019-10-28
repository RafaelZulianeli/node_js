'use strict'

require('../models/categoria.model')
const categoriaRepository = require('../repositories/categoria.repository')
//ti amu nenem <3 
const repository = new categoriaRepository();
class CategoriaController {

    constructor() { }

    async create(req, res) {
        let result = await repository.create(req.body)
        res.status(201).send(result)
    }

    async fetch(req, res) {
        let result = await repository.fetch(req.params.id)
        res.status(200).send(result)
    }

    async fetchAll(req, res) {
        let result = await repository.fetchAll()
        res.status(200).send(result)
    }

    async update(req, res) {
        repository.update(req.params.id, { $set: req.body })
            .then(result => res.status(202).send(result))
            .catch(e => console.error(e))
    }

    async delete(req, res) {
        let result = await repository.delete(req.params.id)
        res.status(204).send(result)
    }
}

module.exports = CategoriaController