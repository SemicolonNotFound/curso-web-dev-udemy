const prod1 = {} // o par de chaves é uma forma literal de declarar um objeto.

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// OBS em JS um objeto é uma combinação de chave e valor. ex: nome = 'lucas'.

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{ "nome": "Camisa Polo", "preco": 79.90 }' // exemplo de JSON apenas por curiosidade 
// /formato textual para interoperabilidade entre sistemas.

console.log(prod2)