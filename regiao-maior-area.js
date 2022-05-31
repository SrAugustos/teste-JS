let data = require('./atividade-paises')


let regionArea = [
    { "region": "Asia", "area": 0 },
    { "region": "Europe", "area": 0 },
    { "region": "Oceania", "area": 0 },
    { "region": "Africa", "area": 0 },
    { "region": "Americas", "area": 0 },
    { "region": "Polar", "area": 0 },
];

module.exports = function getArea() {

    data.filter(r => r.region === r.region).forEach(element => {
        regionArea.filter(r => r.region === element.region).map(p => p.area += element.area);
    });

    let maiorArea = regionArea.sort(function (a, b) {
        return b.area - a.area;
    })

    console.log('A região com a maior area  é: ' + maiorArea[0].region + '\nCom uma area de: ' + maiorArea[0].area);
}


