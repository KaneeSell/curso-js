let a = 3

globalThis.b = 123

//module.exports = { e : 456, f: false, g: 'teste' } //mesma coisa
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando um variavel maluca: sem var e let!
abc = 3 //não faça isso em casa!!!
console.log(global.abc)

