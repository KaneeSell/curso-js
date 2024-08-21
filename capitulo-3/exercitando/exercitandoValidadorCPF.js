//Usar no navegador por conta das caixas de dialogos

function validarCPF(){
    let cpfOrigem = prompt("Digite o CPF:")
    let cpf = cpfOrigem
    let valido = true
    cpf = cpf.replace(/[.,-]/g, '')
    cpf = cpf.split('')
    Object.entries(cpf).forEach(e => {if(Number(e[1])){}else{if(e[1] == 0){}else{valido = false}}})
    if(cpf.length != 11){valido = false}
    let calculoCPF = []
    let calculoCPF2 = []
    let soma = 0
    let auxiliar = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    for(let i = 0; i< cpf.length;i++){cpf[i] = cpf[i] * 1;calculoCPF[i] = cpf[i];calculoCPF2[i] = cpf[i]}
    if(valido){
        for(let i = 0; i <= 8;i++){calculoCPF[i] = auxiliar[i+1] * calculoCPF[i]}
        for(let i = 0; i <= 8;i++){soma += calculoCPF[i]}
        soma = 11 - (soma % 11)
        if(soma >= 10){soma = 0}
        if(soma != cpf[9]){valido = false}
        for(let i = 0; i <= 9;i++){calculoCPF2[i] = auxiliar[i] * calculoCPF2[i]}
        soma = 0
        for(let i = 0; i <= 9;i++){soma += calculoCPF2[i]}
        soma = 11 - (soma % 11)
        if(soma >= 10){soma = 0}
        if(soma != cpf[10]){valido = false}
    }
    alert(`CPF: ${cpfOrigem}\nValido? ${valido? 'Sim':'Não'}`)
}
//Chamar Função Validadora de CPF
validarCPF()