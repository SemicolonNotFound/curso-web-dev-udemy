function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

while( option != -1 ) {
    option = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida ${option}.`)
}

console.log('Até a próxima, gente má!')