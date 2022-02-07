const db = require('../db')

class EntradaModule {

    static newEntrada(Entrada) {
        const { origem, valor, dataEntrada, tipo } = Entrada

        return new Promise((resolve, reject) => {
            try {
                db.query(`call newEntrada(?, ?, ?, ?)`, [origem, valor, dataEntrada, tipo], (erro, result) => {
                    if(erro) reject(erro)
                    resolve(result)
                })
            } catch (erro) {
                console.log(erro)}
        })
    }

    static allEntrada(){
        return new Promise((resolve, reject) => {
            try{
                db.query(`call allEntrada()`, (erro, results) => {
                    if(erro) throw erro
                    resolve(results)
                })
            }catch(erro){
                reject(erro)
                console.log(erro)
            }
        })
    }

}

module.exports = EntradaModule