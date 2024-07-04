
//Dessa forma quando usamos no navegador, nao conseguimos acesso ao escopo nome
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}


//quando usado no navegador, ele consegue ter acesso a escopo nome
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()