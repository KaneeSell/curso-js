console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1] === undefined)
console.log(aprovados[2] === undefined)

aprovados = ['Bia', 'Carlos', 'Ana']
// aprovados.splice(Indice[1,2,3,4,5,6], quantidade que quer apagar(0 não apaga), ...Adicionando novos elemento apartir do indice antes do operador)
// aprovados.splice(1 , 1) //apartir do [1], apagar
aprovados.splice(0, 0, 'Elemento 1', 'Elemento 2') //apartir do [0], não apagar, e informar 'Elemento 1', 'Elemento 2'
console.log(aprovados)  

