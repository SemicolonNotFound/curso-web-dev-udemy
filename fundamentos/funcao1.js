// funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

// se informarmos apenas um valor o resultado é NaN pois o segundo será undefined
imprimirSoma(2,3)

// funcao com retorno
function soma(a, b = 1){ // defini q o valor de b por padrão é 0
    return a + b 
}

// chamamos a função dentro do console.log para mostrar
console.log("A soma é " + soma(1, 5))
console.log("A soma é " + soma(3))
