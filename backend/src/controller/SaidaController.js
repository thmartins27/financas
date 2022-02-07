class SaidaController{
    constructor(destino, valor, dataSaida){
        this.destino = destino
        this.valor = valor
        this.dataSaida = dataSaida
    }

    static async newSaida(req, res){
        const json = {erro: '', results: {}}
        const {destino, valor, dataSaida} = req.body
        const saidaObj = new SaidaController(destino, valor, dataSaida)

    }
}

module.exports = SaidaController