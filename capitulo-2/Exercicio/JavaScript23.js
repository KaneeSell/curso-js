function media(cod, nota1, nota2, nota3){
    let nota = [nota1, nota2, nota3]; let media = 0; let notaMaior = 0; let paramNotaMaior = 0
    for(let i = 0; i <= 2; i++){
        if(notaMaior < nota[i]){notaMaior = nota[i]; paramNotaMaior = i}
    }
    switch(paramNotaMaior){
        case 0:
            media = ((nota[0] * 4) + (nota[1] * 3) + (nota[2] * 3) / 3) / 10
            break;
            case 1:
                media = ((nota[1] * 4) + (nota[0] * 3) + (nota[2] * 3) / 3) / 10
                break;
                case 2:
                    media = ((nota[2] * 4) + (nota[1] * 3) + (nota[0] * 3) / 3) / 10
                    break;
    }
console.log(`Cod. Aluno = ${cod}\nNotas = ${nota}\nMédia = ${media}\nSituação = ${media <= 5 ? 'Aprovado!' : 'Reprovado!'}`)
}
media(1, 6, 7.5, 2)