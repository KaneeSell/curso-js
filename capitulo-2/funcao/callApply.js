function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco} * (1 - this.desc)`
}