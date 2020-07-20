// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 (Onde o variável está fisicamente dentro do código "ESCOPO")

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao // retorna em um contexto mais restrito, o da função.
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = { //aqui temos o contexto do objeto cliente
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco: { // a partir daqui temos o contexto do objeto endereco. Poderiamos ter chaves de mesmo nome
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)