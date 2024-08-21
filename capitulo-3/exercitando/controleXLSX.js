const XLSX = require('xlsx');//Importando biblioteca para dentro do código
const workbook = XLSX.readFile('financas.xlsx');//caminho para o arquivo exccel.xlsx

const worksheet = workbook.Sheets[workbook.SheetNames[0]];//iniciando a manipulação de arquivos XLSX
const entradasTotal = worksheet['E4'].v;//local no exccel que deseja procurar
const saidasTotal = worksheet['E6'].v;
const total = worksheet['E2'].v;

let nomeEntrada = []
let valorEntrada = []
let nomeSaida = []
let valorSaida = []

function Entradas() {
    for(let i = 2;i < 28; i++){
        let auxNome = 'A' + i
        let auxValor = 'B' + i
        if(worksheet[auxNome] != undefined){
        nomeEntrada.push(worksheet[auxNome].v)}
        if(worksheet[auxValor] != undefined){
        valorEntrada.push(worksheet[auxValor].v)
    }
    }
    for(let i = 0; i < nomeEntrada.length; i++){
        console.log(`${nomeEntrada[i]} = ${valorEntrada[i]}`)
    }
}
function Saidas() {
    for(let i = 2;i < 28; i++){
        let auxNome = 'C' + i
        let auxValor = 'D' + i
        if(worksheet[auxNome] != undefined){
        nomeSaida.push(worksheet[auxNome].v)}
        if(worksheet[auxValor] != undefined){
        valorSaida.push(worksheet[auxValor].v)
    }
    }
    for(let i = 0; i < nomeSaida.length; i++){
        console.log(`${nomeSaida[i]} = ${valorSaida[i]}`)
    }
}

    Entradas()
    console.log('----------------')
    Saidas()
    console.log('----------------')
console.log(`Entradas = ${entradasTotal}\nSaídas = ${saidasTotal}\n----------------\nTotal = ${total}`)

//Liberando memoria finalizando manipulação do XLSX
delete workbook.Sheets[workbook.SheetNames[0]];
XLSX.utils.sh