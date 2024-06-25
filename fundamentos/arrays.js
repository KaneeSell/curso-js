const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

//valores [10] = 10 seria preenchido com varios elementos vazios até chegar no array [10]
valores [4] = 10
console.log(valores);
console.log(valores.length); //Traz a quantidade de elementos dentro da array

valores.push({id: 3}, false, null, 'teste'); //assim colocando valores dentro dos elementos de diferentes tipos
console.log(valores);

console.log(valores.pop()); //Último valor colocado na Array
delete valores[0];
console.log(valores);

console.log(typeof valores); //Array é um Objeto