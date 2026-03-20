/*
só uma brincada com o if, else e elseif com arrays :) (inclusive to amando essa linguagem)
*/

const aluno = [{
    Nome: "João",
    Aprovado: null,
    Nota: 8,
    Presenca: true
}]

if (aluno[0].Nota >= 7 && aluno[0].Presenca == true){
    aluno[0].Aprovado = true
    console.log("O aluno tirou nota acima da media ou a media: ", aluno[0].Nota)
    console.log(aluno[0].Aprovado)
    
}else if (aluno[0].Presenca == false){
    console.log("ta de segunda chamada")
}   
else {
    aluno[0].Aprovado = false
    console.log("O aluno tirou nota abaixo da media")
    console.log(aluno[0].Aprovado)
} 
