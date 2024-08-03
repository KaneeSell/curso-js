function criandoArray(array){
    return {
        array,
        junto(){return (array).join("")},
        separado(){return (array).join(", ")}
    }
}
const array = criandoArray(['texto ', 'teste ', 'aqui!'])
console.log(array.array)
console.log(array.junto())
console.log(array.separado())