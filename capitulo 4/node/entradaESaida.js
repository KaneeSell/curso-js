const anonimo = process.argv.indexOf('-s') !== -1


if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}
else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data=> {
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}