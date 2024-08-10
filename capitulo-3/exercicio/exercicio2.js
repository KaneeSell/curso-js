function calcularDias(data){
    data = data.replace(/[/-]/g, "")
    let strData = [Number(data.charAt(0) + data.charAt(1)), Number(data.charAt(2) + data.charAt(3)), Number(data.charAt(4) + data.charAt(5) + data.charAt(6) + data.charAt(7))]
    console.log(strData)
    const strHoje = [Number(new Date().getDate()), Number(new Date().getMonth() + 1), Number(new Date().getFullYear())]
    console.log(strHoje)
    const diasUltimoNiver = strData => {
        let x = strData[0]
        
    }
}
calcularDias('10-07-1999')
calcularDias('10/07/1999')