const express = require('express')
const router = express.Router()

//controllers
const EntradaController = require('../src/controller/EntradaController')
//routers
router.post('/entrada', EntradaController.newEntrada)
module.exports = router