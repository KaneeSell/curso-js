let notas = []
function atribuirNota(notas){
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 0 && 5 > notas[i]){notas[i] = 'D'}
        else if(notas[i] >= 5 && 7 > notas[i]){notas[i] = 'C'}
        else if(notas[i] >= 7 && 9 > notas[i]){notas[i] = 'B'}
        else if(notas[i] >= 9 && 10 >= notas[i]){notas[i] = 'A'}
        else if(notas[i] < 0 && 10 < notas[i]){console.log('Nota Invalida!')}
    }
    console.log(notas)
}
notas = [0.0,4.9,5.0,6.9,7.0,8.9,9.0,10.0]
atribuirNota(notas)
