let valor // não inicializada
console.log(valor) // retornará undefined pois não definimos nada para valor.

// console.log(valor2) // aqui o valor nem declarado foi. gerará então um erro.

valor = null // inicializado mas não possui nenhum valor e não aponta para nenhum local de memória.
console.log(valor)

// OBS quando quisermos zerar uma variável usamos o Null. Deixe para a linguagem definir o undefined

// console.log(valor.toString()) // não será possível a leitura

const produto = {}
console.log(produto.preco) // Informará que o preco é undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
