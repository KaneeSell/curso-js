let idade;
const planoSaude = (idade) =>{
    if(idade > 0 && idade < 10){console.log(`${idade} anos paga R$${80 + 100}`)}
    else if(idade >= 10 && idade < 30){console.log(`${idade} anos paga R$${50 + 100}`)}
    else if(idade >= 30 && idade < 60){console.log(`${idade} anos paga R$${95 + 100}`)}
    else if(idade >= 60){console.log(`${idade} anos conveniados paga R$${130 + 100}`)}
    else {console.log(`Idade inválida`)}
}
for(let i = -1; i < 101; i++){
    planoSaude(i)
}