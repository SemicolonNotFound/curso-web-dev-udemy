const escola = 'Cod3r'

console.log(escola.charAt(3)*2)
console.log(escola.charAt(4)) // Isso irá mostrar o elemento no indice 4 da minha string escola.
console.log(escola.charCodeAt(3)) // Semelhante ao anterior mas retorna o unicode
console.log(escola.indexOf('3')) // Procura o valor mencionado por indice na variavel escola

console.log(escola.substring(1)) // Imprimir uma string cortando o primeiro valor.
console.log(escola.substring(0,3)) // Imprime o valor da string do indice 0 ao indice 2.

console.log('Escola '.concat(escola.concat("!"))) // concatenar strings
console.log('Escola ' + escola + "!") // concatenar strings usando sinal
console.log(escola.replace(3, 'e')) // substitui um valor por algo declarado. nesse caso tira o 3 e coloca e.

console.log('Ana , Maria,Pedro'.split(',')) // Quebra e/ou separa nossa string usando vírgula.

/**
 * OBS: o Operador "+" no contexto de number ele irá somar e no contexto de string irá concatenar.
 */