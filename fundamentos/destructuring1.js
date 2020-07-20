// novo recurso do ES6 ou 2015

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1570
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

// undefined do sobrenome
const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

// erro pois tentamos acesso de um atributo não existente aninhado
const { conta: { ag, num }} = pessoa 
console.log(ag, num)
