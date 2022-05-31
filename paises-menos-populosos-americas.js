let data = require('./atividade-paises')

let paisesPopulososAmerica = [];

module.exports = function getPaisesAmerica() {

    data.filter(e => e.region === 'Americas').forEach(element => {
        paisesPopulososAmerica.push(element)
    })

    let paisesMenosPopulosos = paisesPopulososAmerica.sort(function (a, b) {
        return a.population - b.population;
    })

    console.log(paisesMenosPopulosos.slice(0, 9).forEach(element => {
        console.log(element.name);
    }))
}


