const EntradaModule = require('../module/EntradaModule')

class EntradaController{
    constructor(origem, valor, dataEntrada, tipo){
        this.origem = origem
        this.valor = valor
        this.dataEntrada = dataEntrada
        this.tipo = tipo
    }

    static async newEntrada(req, res){
        /* const {origem} = req.body
        const {valor} = req.body
        const {dataEntrada} = req.body
        const {tipo} = req.body */

        const json = {erro: '', result: []}
        const {origem, valor, dataEntrada, tipo} = req.body
        const entradaObj = new EntradaController(origem, valor, dataEntrada, tipo)
        const entrada = await EntradaModule.newEntrada(entradaObj)
    }
}

module.exports = EntradaController