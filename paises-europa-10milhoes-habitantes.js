let data = require('./atividade-paises')

let paisesCom10Milhoes = [];

module.exports = function getPaisesPopu() {

    data.filter(r => r.region === "Europe").forEach(element => {
        if (element.population >= 10000000) {
            return paisesCom10Milhoes.push(element.name)
        }
    })

    console.log('Os paises com mais de 10 milhões de habitantes na Europa são: ' + paisesCom10Milhoes)
}


