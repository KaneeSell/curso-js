function estaEntre(num, min, max, incluso){
    if(incluso){
        if(min == num || max == num){console.log(true)}
        else{console.log(false)}
    }
    else{
        if(num > min && num < max){console.log(true)}
        else{console.log(false)}
    }
}
estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)