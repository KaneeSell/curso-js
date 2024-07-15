    /*Dividindo uma string e transformando em array - split()
    conseguimos acessar cada caractere de uma string, deste modo:
    let str = "Yes, You Can Do It!";

    console.log(str[0]); // Y
    console.log(str[1]); // e
    console.log(str[2]); // s
    console.log(str[3]); // ,

    console.log(str[10]); // a

    O método split() divide uma string em duas ou mais substrings, dependendo de um separador (ou splitter)
    Usando o caractere de espaço na divisão:
    let arr = message.split(' ');

    O array:
    console.log(arr); // ["I", "am", "a", "Happy", "Go", "lucky", "Guy"]


    Acessando cada elemento do array:
    console.log(arr[0]); // "I"
    console.log(arr[1]); // "am"
    console.log(arr[2]); // "a"
    console.log(arr[3]); // "Happy"
    console.log(arr[4]); // "Go",
    console.log(arr[5]); // "lucky"
    console.log(arr[6]); // "Guy"

    Este tetorna um array vazio:
    ''.split(''); // retorna []

    Este retorna um array com uma string vazia:
    ''.split() // retorna [""]

    Também podemos passar o limite (limit) como parâmetro:
    let message = 'I am a Happy Go lucky Guy';
    console.log(message.split(' ', 4)); // ["I", "am", "a", "Happy"] 

    ambém é possível passar uma expressão regular (regex) como separador:
    let message = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';

    let sentences = message.split(/[.,!,?]/);
    console.log(sentences); // ["The sky is blue", "Grass is green", "Do you know the color of the Cloud", ""]
    
    sentences = message.split(/[.,!,?]/, 3);
    console.log(sentences); // ["The sky is blue", "Grass is green", "Do you know the color of the Cloud"]

    So HTML, valores de id não podem ter espaços. Podemos resolver esse problema da seguinte maneira:
    let name = 'Tapas Adhikary';
    let subs = name.split(' ');
    console.log(subs); // ["Tapas", "Adhikary"]

    let joined = subs.join('-');
    console.log(joined); // Tapas-Adhikary
    */