'use strict'

function CategoriaController() {}

CategoriaController.prototype.create = async (req, res) => {}
CategoriaController.prototype.find = async (req, res) => {}
CategoriaController.prototype.findAll = async (req, res) => {
    res.status(200).send('Funcionando...')
}
CategoriaController.prototype.update = async (req, res) => {}
CategoriaController.prototype.delete = async (req, res) => {}

module.exports = CategoriaController