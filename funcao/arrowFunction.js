let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' //melhor forma para utilizar, parametro vazio
ola = _ => 'Olá' //possui parametro mas pode ser ignorado na chamada.
ola => 'Olá'

console.log(ola())