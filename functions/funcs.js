/*
Function: Só é executado quando eu chamar ela, ou seja, quando eu quiser usar ela. Ela é um bloco de código que pode ser reutilizado várias vezes. Ela pode receber parâmetros e retornar um valor, entre  outros.
e pode usar varias vezes tambem
tipos de functions:
- com parametros ()
- void (vazia), sem parametros
- com return (retorna valores ou strings, tanto faz)
- arrow function
*/

/*void function: pois nao retorna nada e nem tem parametros */
function OlaMundo(){
    console.log("Olá Mundo")

}
OlaMundo()


/*functions com parametros:meio q esse parametro é meio que uma variavel só que nao const e sim "let" pois eu consigo mudar e chamar outros valores ou strings diferentes */
function MeuNome(nome){
    console.log(`Meu nome é ${nome}`)
}

MeuNome("Neymar")


/*function com return: ela retorna algo que to pedindo*/

function Soma(a, b){
    return a + b
}

const resultado = Soma(5, 10)
console.log(resultado)



/*teste com array e function com return e parametros, nao sei se funciona mas vamos testar*/
function ArrayComParamentroFuncionaNaoSei(Nome, idade){
    const array = [{
        nome: Nome,
        idade: idade,
    }]

    if (array[0].idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(ArrayComParamentroFuncionaNaoSei("Anderson", 20))

/*Arrow function: é uma forma mais curta de escrever uma função, ela é anônima, ou seja, não tem nome, e é escrita com a sintaxe de flecha (=>) */

const ArrowFunction = (a, b) => {
    console.log(a + b)
}

ArrowFunction(5, 13)