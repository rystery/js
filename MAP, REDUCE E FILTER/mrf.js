/* Map é um método que transforma cada elemento de um array em outro valor e ganha acesso a 3 dados:
- Item por item do array
- Posição do item no array
- O array completo

*/


const produtos = [{
    nome: "Camisa",
    preco: 50,
    desconto: true,
    quantidade: 3,
    promo:true
},
{
    nome: "Calça",
    preco: 100,
    desconto: false,
    quantidade: 2,
    promo:false
}]

const produtosComDesconto = produtos.map(function(item){

    const novopreco = item.desconto ? item.preco * 0.5 : item.preco
    

    return {
        nome: item.nome,
        preco: novopreco.toLocaleString("pt-br", {style: "currency", currency: "BRL"}),
        desconto: item.desconto
    };
})


console.log(produtosComDesconto)


/* Reduce é um método que reduz um array a um único valor e ganha acesso a 4 dados:
- Acumulador: é o valor que vai sendo acumulado a cada iteração, ou seja, é o valor que vai sendo atualizado a cada elemento do array.
- Item por item do array
- Posição do item no array
- O array completo
*/


const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce(function(acumulador, item){
    return acumulador + item    
} /* valor inicial do acumulador, ou seja, o valor que vai ser usado na primeira iteração */)

console.log(soma)


const totalvendido = produtos.reduce(function(acumulador, item){
    
    return acumulador + item.preco
}, 0)


console.log(totalvendido.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))


//filter é um método que filtra os elementos de um array e ganha acesso a 3 dados:
//- Item por item do array
//- Posição do item no array
//- O array completo


const promos = produtos.filter(function(item){
   const promocao = item.promo ? item.nome : null
   return promocao
})


console.log(promos)

//misturando tudo:

const faturamentoTotal = produtos
  .map(function(item) {
    return {
      ...item,
      quantidade: item.quantidade + 10
    }
  })
  .filter(function(item) {
    return item.desconto
  }).reduce(function(acumulador, item) {
    return acumulador + (item.preco * item.quantidade)
  }, 0)

console.log(faturamentoTotal)