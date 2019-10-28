'use strict'

require('../models/produto.model')
const produtoRepository = require('../repositories/produto.repository')
//ti amu nenem <3 
const repository = new produtoRepository();
class produtoController {

    constructor() { }

    async create(req, res) {
        let result = await repository.create(req.body)
        res.status(201).send(result)
    }

    async find(req, res) {
        let result = await repository.find(req.params.id)
        res.status(200).send(result)
    }

    async findAll(req, res) {
        let result = await repository.findAll()
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

module.exports = produtoController