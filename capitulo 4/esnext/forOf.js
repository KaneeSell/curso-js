for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma){
    console.log(i)
}

for (let assuntos of assuntosEcma){
    console.log(assuntos)
}

const assuntosMap = new Map([
    ['Map', {abrodado: true}],
    ['Set', {abrodado: true}],
    ['Promise', {abrodado: false}]
])

for (let assuntos of assuntosMap){
    console.log(assuntos)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}
for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}