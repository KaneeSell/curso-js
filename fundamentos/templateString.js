const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`;
    console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);//Usando "1 + 1" concatena, quando usamos "${1 + 1}" feito soma
const up = texto => texto.toUpperCase(); //Podemos chamar uma função usando uma const
console.log(`Ei... ${up('cuidado')}!`); //Chamando a função dentro dos ${} e transformando cuidado em CUIDADO
