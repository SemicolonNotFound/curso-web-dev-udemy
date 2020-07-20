// destructuring de a tendo valor 10 no array
const [a] = [10]
console.log(a)

// extrair determinados valores
const [n1, , n3, , n5 , n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// NÃO use isso, apenas fins didáticos.
const [, [, nota]] = [[, 8 , 8], [9, 6, 8]]
console.log(nota)