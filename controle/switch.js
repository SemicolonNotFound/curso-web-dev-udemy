const imprimirResultado = function (nota) {
    // obs: usa o break para ele sair da sentença quando verdadeira e finalizar a execução do switch.
    // Não é possível usar vírgula ou operadores lógicos no case. Ele é pobre
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break

        case 8: case 7:
            console.log('Aprovado')
            break

        case 6: case 5: case 4:
            console.log('Recuperação')
            break

        case 3, 2 , 1 , 0:
            console.log('Reprovado')
            break

        default:
            console.log('Nota inválida')


    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5.9)
imprimirResultado(2.9)
imprimirResultado(-4)
imprimirResultado(404)