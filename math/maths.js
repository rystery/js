/*
     math
     -pow (potencia)
     -sqrt (raiz quadrada)
     -abs (valor absoluto)
     -ceil (arredondar para cima)
     -floor (arredondar para baixo)
     -round (arredondar para o mais próximo)
*/

const potencia = Math.pow(2, 3) // 2 elevado a 3
console.log(potencia)


const RaizQuadrada = Math.sqrt(125,2) // raiz quadrada de 16
console.log(Math.floor(RaizQuadrada)) // arredondar para cima

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(1, 10)) // gera um numero aleatorio entre 1 e 10