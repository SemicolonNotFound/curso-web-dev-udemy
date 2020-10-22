// Função em JS é Firs-Class Object (Citizens)
// Higher-order function

// criar de forma literal | função retorna undefined se não declarar return
function funcao1() { }

// Armazenar em uma variável
const funcao2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, funcao1, funcao2]
console.log(array[0](2, 3)) // invoca a função de cálculo a + b q é indice 0

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Passar função como param de outra função
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // informa o valor dos params a, b. Depois de c.

const cincoMais = soma(2, 3)
cincoMais(4)