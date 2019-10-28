'use strict'

require('../models/categoria.model')
const repositoryCommon = require('../bin/commons/repository')
class categoriaRepository {
    
    constructor() {
        this.repository = new repositoryCommon('Categoria')
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

module.exports = categoriaRepository