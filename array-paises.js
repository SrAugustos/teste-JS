
let data = require('./atividade-paises')

let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']

module.exports = function getPaises() {

    let order = data.sort(function (a, b) { return b.population - a.population })

    let listName = [];

    alfabeto.forEach(element => {
        listName.push(order.find((e) => e.name[0] === element))
    });

    listName.forEach(element => { console.log(element); });


}

