console.log(typeofconsole) // object
console.log(Match.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola' //da mesma forma pode ser usada, não recomendado, pode conter espaços
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //podemos criar um atributo publico dessa forma
    console.log('Exec...')
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()