'use strict'

require('../models/produto.model')
const repositoryCommon = require('../bin/commons/repository')
class produtoRepository {

    constructor() {
        this.repository = new repositoryCommon('Produto')
    }

    async create(model) {
        return await this.repository.create(model)
    }

    async fetch(id) {
        return await this.repository.fetch(id)
    }

    async fetchAll() {
        return await this.repository.fetchAll()
    }

    async update(id, model) {
        return await this.repository.update(id, model)
    }

    async delete(id) {
        return await this.repository.delete(id)
    }
}

module.exports = produtoRepository