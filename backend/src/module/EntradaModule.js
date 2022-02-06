const db = require('../db')

class EntradaModule {

    static newEntrada(Entrada) {
        const { origem, valor, dataEntrada, tipo } = Entrada

        return new Promise((resolve, reject) => {
            try {
                db.query(`insert into entrada(origem, valor, data_entrada, tipo)
                values(?, ?, ?, ?)`, [origem, valor, dataEntrada, tipo], (erro, result) => {
                    if (erro) reject(erro)
                    resolve(result)
                })

            } catch (erro) {
                console.log(erro)
            } finally {
                db.end()
            }
        })
    }

}

module.exports = EntradaModule