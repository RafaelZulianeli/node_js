'use strict'

class ProdutoController {
    async create(req, res) { }
    async find(req, res) { }
    async findAll(req, res) {
        res.status(200).send('Funcionando...')
    }
    async update(req, res) { }
    async delete(req, res) { }
}

module.exports = ProdutoController