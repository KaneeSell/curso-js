//criando um Objeto
const prod1 = {};
//dentro de objeto, outro objeto nome, com valor 'Celular Ultra Mega'
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.4 //Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

prod2['Desconto Legal'] = 0.4 //Evitar atributos com espaço

console.log(prod2)
