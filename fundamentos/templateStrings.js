const nome = 'Romeo'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // O que fica entre os backticks (crase) será interpolado
// No caso ele irá interpretar como texto. Para interpretar como cálculo ou variável coloque entre ${}.


const up = texto => texto.toUpperCase() // aero function será explicado mais pra frente
console.log(`Ei... ${up('cuidado')}!`) // podemos chamar uma função dentro do template strings.