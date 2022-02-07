const EntradaModule = require('../module/EntradaModule')

class EntradaController {
    constructor(origem, valor, dataEntrada, tipo) {
        this.origem = origem
        this.valor = valor
        this.dataEntrada = dataEntrada
        this.tipo = tipo
    }

    static async newEntrada(req, res) {
        const json = { erro: '', result: [] }
        const { origem, valor, dataEntrada, tipo } = req.body
        const entradaObj = new EntradaController(origem, valor, dataEntrada, tipo)
        try {
            const entrada = await EntradaModule.newEntrada(entradaObj)
            if (entrada.affectedRows != 0) json.result.push({
                cadastro: true,
                message: 'Dados cadastrados com sucesso'
            })
            else throw 'Dados não cadastrados'
        } catch (e) {
            json.erro = e
            console.log(e)
        }
        res.json(json)
    }

    static async allEntradas(req, res) {
        const json = { erro: '', result: [] }

        try {
            const entrada = await EntradaModule.allEntrada()
            if(entrada[0].length == 0) throw 'Nenhuma entrada'
            json.result.push(entrada[0])

        } catch (erro) {
            json.erro = erro
            console.log(erro)
        }


        res.json(json)

    }
}

module.exports = EntradaController