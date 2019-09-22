'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/produto.controller')

let ctrl = new controller()

router.get('/', ctrl.findAll)
router.get('/:id', ctrl.find)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.delete)

module.exports = router