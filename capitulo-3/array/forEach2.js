Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)//retornando o valor da array, o indice que esta no contador i, e a array completa
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array){ //nome(sendo o valor do array, indice um contador apartir de 1, array é a array completa)
    console.log(`${indice + 1}) ${nome}`)
    // console.log(array)//mostra o array completa que foi retornada no callback
})