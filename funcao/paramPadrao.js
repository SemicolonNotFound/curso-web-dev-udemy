// trazer um valor padrão 1 
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// a e b foram passados, c irá retornar o valor padrão
console.log(soma1(2, 4), soma1(), soma1(0, 0, 0))
// na estratégia de usar 0 ele irá ser falso e usará o valor padrão.


// outras estrategias para gerar valor padrão
function soma2(a, b, c) {
    // nesse caso ele irá apenas identificar o valor 1
    a = a !== undefined ? a : 1
    // se nos argumentos tiver valor, use-o. Se nao use o valor 1
    b = 1 in arguments ? b : 1
    // se nao for um numero, use o valor 1. Senão use o valor passado. **MAIS SEGURA**
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))
console.log(soma2('a', 'b', 'c'))

// valor padrão ES6 / 2015
function soma3(a = 1, b = 1, c = 1) { 
    return a+b+c
}

console.log(soma3(4,5,6))
console.log(soma3(4))
console.log(soma3('a'))