function calcularCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    function crescimento(altura, taxaCrescimento, tempo){
        let totalAltura
        return totalAltura = altura + (taxaCrescimento * tempo)
    }
    if(altura1 > altura2 && taxaCrescimento2 > taxaCrescimento1){
        let alturaUltrapassa1 = altura1
        let alturaUltrapassa2 = altura2
        let i = 0
        for(i = 1; alturaUltrapassa1 >= alturaUltrapassa2; i++){
            alturaUltrapassa1 = crescimento(altura1, taxaCrescimento1, i)
            alturaUltrapassa2 = crescimento(altura2, taxaCrescimento2, i)
        }
        i--
        console.log(`A Criança 2 ultrapassará a Criança 1 em ${i} Anos\nAltura das Crianças após ${i} anos:\nCriança 1 = ${alturaUltrapassa1}\nCriança 2 = ${alturaUltrapassa2}`)
    } else if(altura2 > altura1 && taxaCrescimento1 > taxaCrescimento2){
        let alturaUltrapassa1 = altura1
        let alturaUltrapassa2 = altura2
        let i = 0
        for(i = 1; alturaUltrapassa1 <= alturaUltrapassa2; i++){
            alturaUltrapassa1 = crescimento(altura1, taxaCrescimento1, i)
            alturaUltrapassa2 = crescimento(altura2, taxaCrescimento2, i)
        }
        i--
        console.log(`A Criança 1 ultrapassará a Criança 2 em ${i} Anos\nAltura das Crianças após ${i} anos:\nCriança 1 = ${alturaUltrapassa1}\nCriança 2 = ${alturaUltrapassa2}`)
    } else{ console.log('Não ultrapassará em altura') }
}
calcularCrescimento(10, 0, 9, 6)