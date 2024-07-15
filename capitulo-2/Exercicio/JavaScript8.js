let resultado = 'pontuação1 pontuação2 pontuação3'
function desempenhoBasquete(pontuacaoJogos){
    pontuacaoJogos = pontuacaoJogos.split(' ')
    let pontosInt = []
    console.log(pontuacaoJogos)
    console.log(`Total de jogos = ${pontuacaoJogos.length}`)
    // console.log(pontuacaoJogos.toString().replace(/pontuação/g, ""))
    for( let i = 0; i < pontuacaoJogos.length; i++){
        pontosInt.push(Number(pontuacaoJogos[i]))
        console.log(pontosInt[i])
        console.log(typeof pontosInt[i])
        // let totalPontos = totalPontos + pontosInt[i]
    }
}
desempenhoBasquete(resultado)