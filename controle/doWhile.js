function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// se isso for -1 não entraria no laço. Mas no do while funcionaria.
let option = -1

do {
    option = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida ${option}.`)
} while (option != -1)

console.log('Até a próxima, gente má!')