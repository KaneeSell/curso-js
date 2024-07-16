const div3 = () => {
    let resto = num % 3   
    if(num != 0 && num % 3 === 0) {
        return true
    }
    return false
}
for(let i = 0; i < 101; i++){
    num = i
    console.log(`${num} é divisivel por 3? R:${div3()}`)
}