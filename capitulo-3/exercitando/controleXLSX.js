const XLSX = require('xlsx');//Importando biblioteca para dentro do código
const workbook = XLSX.readFile('financas.xlsx');//caminho para o arquivo exccel.xlsx

const worksheet = workbook.Sheets[workbook.SheetNames[0]];//iniciando a manipulação de arquivos XLSX
const entradasTotal = worksheet['B28'].v;//local no exccel que deseja procurar
const saidasTotal = worksheet['D28'].v;
const total = worksheet['E2'].v;
function Entradas() {
    nome = []
    valor = []
    for(let i = 2;i < 28; i++){
        let auxNome = 'A' + i
        let auxValor = 'B' + i
        if(worksheet[auxNome] != undefined){
        nome.push(worksheet[auxNome].v)}
        if(worksheet[auxValor] != undefined){
        valor.push(worksheet[auxValor].v)
    }
    }
    for(let i = 0; i < nome.length; i++){
        console.log(`${nome[i]} = ${valor[i]}`)
    }
}
function Saidas() {
    nome = []
    valor = []
    for(let i = 2;i < 28; i++){
        let auxNome = 'C' + i
        let auxValor = 'D' + i
        if(worksheet[auxNome] != undefined){
        nome.push(worksheet[auxNome].v)}
        if(worksheet[auxValor] != undefined){
        valor.push(worksheet[auxValor].v)
    }
    }
    for(let i = 0; i < nome.length; i++){
        console.log(`${nome[i]} = ${valor[i]}`)
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