{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)

function teste() {
    var local =123 //Visivel somente dentro da função
    console.log(local)
}

teste()
console.log(local) //Resultado: not defined, não achou as variaveis dentro da função

