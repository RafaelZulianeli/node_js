'use strict'

const mongoose = require('mongoose')

class Repository {
    
    constructor(model){
        this.dao = mongoose.model(model)
    }

    async create(model) {
        return await new this.dao(model).save()
    }

    async fetch(id) {
        return await this.dao.findById(id)
    }

    async fetchAll() {
        return await this.dao.find()
    }

    async update(id, model) {
        return await this.dao.findByIdAndUpdate(id, { $set: model })
            .then(result => {
                result = model
                result._id = id
                return result
            })
            .catch(e => console.error(e), e)
    }

    async delete(id) {
        return await this.dao.findByIdAndRemove(id)
    }
}

module.exports = Repository