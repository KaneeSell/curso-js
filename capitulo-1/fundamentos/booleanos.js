let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
//Usamos ! para negação, quando usamos !! estamos negando a negação, eles se anulam e mostra o valor original
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = 33));
console.log(!!(isAtivo = true));

console.log('os flasos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '));//Ira verificar se tem algo verdadeiro e mostrar True caso tenha

let nome = '';
console.log(nome || 'Desconhecido'); //caso foi preenchido a variável nome, ele imprime nome, caso não "Desconhecido"
