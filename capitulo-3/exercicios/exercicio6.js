function inverso(arguments){
    if(typeof arguments == "boolean"){console.log(!arguments)}
    if(typeof arguments == "number"){if(arguments == 0){console.log(arguments)}else if(arguments < 0){arguments = -arguments;console.log(arguments)}else if(arguments > 0){arguments = -arguments;console.log(arguments)}}
    if(typeof arguments == "string"){console.log('Booleano ou números esperado, mas o parâmetro é do tipo string')}
}
inverso(true)
inverso('6')
inverso(-2000)
inverso('Programação')