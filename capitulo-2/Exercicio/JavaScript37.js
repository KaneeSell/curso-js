function pA(n, a1, r){
    let termosDaPA = []; let somaTermosPA = 0
    termodaPA = [a1, a1 + r, a1 + 2 * r, a1 + 3 * r];
    somaTermosPA = a1 + (n - 1) * r;
    console.log(`temos da Progressão Aritmética = [${termodaPA},...]\nSoma dos termos = ${somaTermosPA}`)
}
function pG(n, a1, q){
    let termosDaPG = []; let somaTermosPG = 0
    termosDaPG = [a1, a1 + 1 * q, a1 + 3 * q];
    somaTermosPG = a1 * q ** (n - 1);
    console.log(`temos da Progressão Aritmética = [${termosDaPG},...]\nSoma dos termos = ${somaTermosPG}`)
}
pA(10, 26, 5)
pG(20, 2, 2)