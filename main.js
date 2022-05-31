

let getPaises = require('./array-paises');
let getPopulacao = require('./function-menor-populacao');
let getArea = require('./regiao-maior-area');
let getPaisesAmerica = require('./paises-menos-populosos-americas')
let getPaisesPopu = require('./paises-europa-10milhoes-habitantes')
function init() {
    console.log('===A REGIÃO COM A MENOR POPULAÇÃO===')
    getPopulacao();
    console.log('===PAÍSES DA EUROPA COM MAIS DE 10 MILHÕES DE HABITANTES ===')
    getPaisesPopu()
    console.log('===A REGIÃO COM A MAIOR AREA===')
    getArea()
    console.log('===OS 10 PAÍSES MENOS POPULOSOS DA AMERICA===')
    getPaisesAmerica()
    console.log('===UM ARRAY COM O NOME DE PAÍSES ONDE A PRIMEIRA LETRA NÃO SE REPETE E CUJO O CRITÉRIO DE SELEÇÃO FOI QUEM TIVESSE A MAIOR POPULAÇÃO===')
    getPaises();
    return console.log('-----------------------------------------------------')
}
init();