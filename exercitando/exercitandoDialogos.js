/*Em Js, no navegador podemos usar caixas de dialogo com o usuario. Dentre elas:
alert("Sua mensagem!") uma caixa de dialogo com um OK
confirm("Sua mensagem!") caixa de dialogo com OK e CANCEL
prompt("Sua mensagem!") caixa de dialogo com texto e um OK e CANCEL 
*/

//Usar no navegador esses códigos!

function criarAluno(){
    this.nome = prompt("Digite o nome do Aluno:")
    this.idade = prompt("Digite a idade do Aluno:")
    this.passou = confirm("Passou de ano?")
    console.log("Aluno criado com sucesso!")
    return{
        nome,
        idade,
        aprovado(){if(passou == true){alert(`${nome} Aprovado!`)}else{alert(`${nome} Reprovou!`)}},
        apresentar(){alert(`Nome: ${nome}\nIdade: ${idade}\nAprovado? ${passou? "Sim": "Não"}`)}
    }
}

const aluno1 = criarAluno()
aluno1.aprovado()
aluno1.apresentar()
const aluno2 = criarAluno()
aluno2.aprovado()
aluno2.apresentar()
const aluno3 = criarAluno()
aluno3.aprovado()
aluno3.apresentar()