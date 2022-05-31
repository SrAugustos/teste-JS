
let data = require("./atividade-paises")

let regionPopList = [
    { "region": "Asia", "pop": 0 },
    { "region": "Europe", "pop": 0 },
    { "region": "Oceania", "pop": 0 },
    { "region": "Africa", "pop": 0 },
    { "region": "Americas", "pop": 0 },
    { "region": "Polar", "pop": 0 },
];

module.exports = function getPopulacao() {

    data.filter(r => r.region === r.region).forEach(element => {
        regionPopList.filter(r => r.region === element.region).map(p => p.pop += element.population);
    });

    let regionMenorPop = regionPopList.sort(function (a, b) {
        return a.pop - b.pop;
    });

    console.log('A regisão com a menor população é: ' + regionMenorPop[0].region + '\nCom uma população de: ' + regionMenorPop[0].pop);

}



