const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() { //adicionando um novo elemento a uma Array,
        console.log(i)
    })
}

funcs[2]()
funcs[8]()