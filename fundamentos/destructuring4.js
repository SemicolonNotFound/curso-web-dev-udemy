function random([min = 0, max = 1000]){
    // se o min for maior, ele inverte as variaveis
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    // arredonda para baixo
    return Math.floor(valor)
}

console.log(random([50, 40]))
console.log(random([992]))
console.log(random([, 10]))
console.log(random([]))