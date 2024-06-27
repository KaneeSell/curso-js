//Hoisting - é um efeito padrão de mover a declaração ao topo

console.log('a =', a)
var a = 2
console.log('a =', a)

//Mesma coisa que esse exemplo, quando usamos var, ele primeiro cria as mesmas, e depois atribui um valor:

//EXEMPLO 1
// var a
// console.log('a =', a)
// var a = 2
// console.log('a =', a)

//mesmo dentro da função ela sofre esse efeito
//EXEMPLO 2
// function teste() {
//     console.log('a=', a)
//     var a = 2
//     console.log('a =', a)
// }

// teste()


//Gera um erro quando tentamos usar o let, ele não sofre esse efeito
// console.log('b =', b)
// let b = 2
// console.log('b =', b)
