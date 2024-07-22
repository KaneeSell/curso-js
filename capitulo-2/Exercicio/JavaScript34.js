function stringIgualString(string1, string2){
    console.log(string1.toUpperCase() === string2.toUpperCase())
}
stringIgualString('teste', 'teste')
stringIgualString('teStE', 'TEsTe')
stringIgualString('teste', 'diferente')