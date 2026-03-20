/*
For Of | For In | For Loop | For Each
*/

/*For Loops*/
const users = ["Jorias", "Maria", "João", "Pedro"]

/*com arrays*/
for (let i = 0; i < users.length; i++){
    console.log(users[i])
}

/*variavel, condição(rode até tal coisa acontecer), oque eu quero que aconteça  */
for(let i = 0;  i < 10; i += 1){ /* ou i++ ou i+=1, tanto faz */
    console.log(i)
}

/*--------------------------------*/


/*For Of: ele é usado para iterar sobre os elementos de um array, ou seja, ele percorre cada elemento do array e executa um bloco de código para cada elemento. Ele é mais simples e mais legível do que o for loop tradicional, pois não precisa de uma variável de controle e de uma condição de parada. Ele é usado principalmente para arrays, mas também pode ser usado para objetos iteráveis, como strings e mapas. */

for(let name of users){
    console.log(name)
}


/*--------------------------------*/

/*For In: ele é usado para iterar sobre as propriedades de um objeto, ou seja, ele percorre cada propriedade do objeto e executa um bloco de código para cada propriedade. Ele é mais simples e mais legível do que o for loop tradicional, pois não precisa de uma variável de controle e de uma condição de parada. Ele é usado principalmente para objetos, mas também pode ser usado para arrays, embora não seja recomendado, pois ele percorre as propriedades do array, e não os elementos do array. */

const user = {
    nome: "João",
    idade: 20,
}

for(let users in user){
    console.log(`${users} : ${user[users]}`) /* ele vai imprimir os valores das chaves do objeto, ou seja, João e 20 */
}



/*--------------------------------*/

/*For Each: ele é usado para iterar sobre os elementos de um array, ou seja, ele percorre cada elemento do array e executa um bloco de código para cada elemento. Ele é mais simples e mais legível do que o for loop tradicional, pois não precisa de uma variável de controle e de uma condição de parada. Ele é usado principalmente para arrays, mas também pode ser usado para objetos iteráveis, como strings e mapas. Ele é um método do array, ou seja, ele é chamado a partir do array que queremos iterar. Ele recebe uma função como parâmetro, que é executada para cada elemento do array. A função recebe três parâmetros: o elemento atual, o índice do elemento e o array completo. */


const usuarios = [{
    nome: "João",
    Premium: true
},
{
    nome: "Maria",
    Premium: false
},
{
    nome: "Ana Maria",
    Premium: false
}
]

/*formato do for each: item, index e array (Item: Dados do elemento, index: posição do elemento no array, array: o array completo) */

usuarios.forEach(function(item, index, array){
   if (item.Premium == true){
    console.log(`O usuario ${item.nome} é premium`)
   } else {
    console.log(`o usuario ${item.nome} não é premium`)
   }
})
