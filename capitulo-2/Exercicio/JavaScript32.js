let vetor = []
function mediaPonderada(vetor){
    if(vetor.length > 0){
      let total = 0
      for(let i = 0; i < vetor.length; i++){
        total += vetor[i]
      }   
      console.log(`A media ponderada é ${total / vetor.length}`)
    } else{ console.log('Sem valor a calcular a media ponderada!') }
}
vetor = [7, 8, 9, 10]
mediaPonderada(vetor)