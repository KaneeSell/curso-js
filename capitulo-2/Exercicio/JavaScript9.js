function classificarAluno(nota){
    let notaRedonda = 0
    let aux = 0
    let auxNota = 0
    if (nota >= 0) if (nota <= 100){
        if (nota >= 40){
            function arredondar(valor) {
                const resto = valor % 5;
                if (resto === 0) {
                    return valor;
                } else if (resto <= 2) {
                    return valor;
                } else if (resto <= 4) {
                    return valor + (5 - resto);
                }
            }
            console.log(`Nota Final: ${arredondar(nota)}`)
            console.log('Aprovado!')
        } else {
            console.log(`Nota Final: ${nota}`)
            console.log('Reprovado!')
        }
    } else {
        console.log('Nota Inválida!')
    }else {
        console.log('Nota Inválida!')
    }
}
classificarAluno(11)
classificarAluno(22)
classificarAluno(33)
classificarAluno(44)
classificarAluno(55)
classificarAluno(66)
classificarAluno(77)
classificarAluno(88)
classificarAluno(99)