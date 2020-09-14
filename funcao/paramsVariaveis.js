// o fato de eu não declarar parametros, n significa que eu nao possa passar parametros.
function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

// dessa forma podemos usar soma para varios e varios valores.
console.log(soma(2, 5, 3))
console.log(soma(1))
console.log(soma(1, 3.2, 'teste'))
console.log(soma('a', 'b', 'c'))

// Porém, se nao for numero e irá concatenar os valores e isso pode gerar dores de cabeça(Headache).