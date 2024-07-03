/*
Evitar usar, pois o codigo fica mais confuso,
por desviar o fluxo do código

BREAK
*Não influencia em IF.
Influencia no SWITCH
FOR e WHILE

Continue
FOR e WHILE
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums) {
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
externo: for(a in nums) { //Não abusar, codigo dificil manutenção
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}