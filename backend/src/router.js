const express = require('express')
const router = express.Router()

//controllers
const EntradaController = require('../src/controller/EntradaController')
const SaidaController = require('../src/controller/SaidaController')
//routers
router.post('/entrada', EntradaController.newEntrada)
router.get('/entradas', EntradaController.allEntradas)

router.post('/saida', SaidaController.newSaida)

module.exports = router