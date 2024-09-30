//JSON
const json = '{"nome": "Ademir", "idade": 26}'
const obj = JSON.parse(json)
console.log(json)
console.log(obj)
Object.entries(obj).forEach(i => {console.log(`${i[0]} = ${i[1]}`)})