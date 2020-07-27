/** Esse WHILE é identico ao for abaixo. */
// let contador = 1
// while (contador <= 10) {
//     console.log(`contador = ${contador}`)
//     contador++
// }

// informar o let declara que o i só terá escopo dentro do for.
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
    //length é a propriedade q contem o tamanho do array.
for (let i = 0; i < notas.length; i++) {
    // notas é o array e o i vai aumentando e armazenando a posição do array. 
    // Então pra cada passagem ele terá um valor de posição diferente e na declaração 
    // podemos chamá-lo para ir exibindo os valores posição por posição do nosso array.
    console.log(`nota = ${notas[i]}`)
}