function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // retorna area
console.log(area(2)) // retorna NaN
console.log(area()) // retorna NaN
console.log(area(2, 3, 4)) // retorna area, ignora os valores adicionais.
console.log(area(5, 5)) // retorna acima do permitido