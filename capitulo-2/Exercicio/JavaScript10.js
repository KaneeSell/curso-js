const div3 = (num) => {  
    return num != 0 && num % 3 === 0;
}
for(let i = 0; i < 101; i++){
    let num = i
    console.log(`${num} é divisivel por 3? R:${div3(num)}`)
}