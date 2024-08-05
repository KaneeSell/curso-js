const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){ //nome(sendo o valor do array, indice um contador apartir de 1, array é a array completa)
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)//mostra o array
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)