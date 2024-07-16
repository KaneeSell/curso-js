function desempenhoBasquete(pJogos){
    let ponts = pJogos.toString().replace(/pontuação/g, "").split(' ')
    let pontsInt = []
    let totalponts = 0
    let media = 0
    let minPont = Number(ponts[0])
    let maxPont = 0
    pontsInt[0] = Number(ponts[0])
    for(let i = 0; i < ponts.length; i++){
        pontsInt[i] = Number(ponts[i])
        totalponts = pontsInt[i] + totalponts 
        if(maxPont < pontsInt[i]){
            maxPont = pontsInt[i]
        } else{}
    }
    minPont = Number(pontsInt[0])
    for(let i = 0; i < ponts.length; i++){
        if(minPont > pontsInt[i]){
            minPont = pontsInt[i]
        } else{}
    }
    media = (totalponts / ponts.length).toFixed(2)
    console.log(`Total de jogos = ${ponts.length}\nTotal Pontos = ${totalponts}\nMedia em jogos = ${media}\nMenor pontuação = ${minPont}\nMaior pontuação = ${maxPont}`)
    let records = []
    let piores = []
    for(let i = 0; i < ponts.length; i++){
        if(media < pontsInt[i]){
            records.push(pontsInt[i])
        } else {if(media > pontsInt[i]){
            piores.push(pontsInt[i])
        }
    }
    }
    console.log(`Records = ${records}\nPiores = ${piores}`)
}
desempenhoBasquete('pontuação10 pontuação20 pontuação11 pontuação9 pontuação15 pontuação10')