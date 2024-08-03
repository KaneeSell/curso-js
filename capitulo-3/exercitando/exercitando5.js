function Aluno(nome, nota){
    this.nome = nome
    this.nota = nota
}
const roberto = new Aluno('Roberto Silva', 7.5)
console.log(roberto)
console.log(roberto.nome)
console.log(roberto.nota)
Object.entries(roberto).forEach(e => {console.log(`${e[0]} = ${e[1]}`)})

