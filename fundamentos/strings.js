//RegEx (ou expressão regular) é uma sequência de caracteres que define um padrão de pesquisa para encontrar
//ou manipular partes de texto com base em regras específicas.

const escola = "Cod3r"

console.log(escola.charAt(4)); //mostra "r", obtendo a quarta letra da palavra
console.log(escola.charAt(5)); //Valor vazio
console.log(escola.charCodeAt(3)); //Pegar o código HTML de 3 é 51
console.log(escolaindexOf('3')); //Pegar o index de 3

console.log(escola.substring(1)); //Apartir do indice 1 até o final
console.log(escola.substring(0,3)); //Apartir do 0 até o 3

console.log('Escola '.concat(escola.concat("!"))); //Concaternar, juntar a mesma frase
console.log('Escola ' + escola + "!"); //Concaternar, juntar a mesma frase
console.log(escola.replace(3, 'e')); //Vai substituir o 3 pelo "e"
console.log(escola.replace(/\d/, 'e')); //Substituir todos os numeros pela letra "e"
console.log(escola.replace(/\w/g, 'e')); //Substituir todos os digitos pela letra "e"

console.log('Ana,Maria,Pedro'.split(',')); //Cria uma array e substitui as virgulas por espaço
console.log('Ana,Maria,Pedro'.split('/,/')); //Cria uma array e substitui as virgulas por espaço
