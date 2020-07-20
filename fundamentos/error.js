function tratarErroELancar(erro) {
    // throw new Error ('Ocorreu um erro inesperado')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // throw Lança o erro para exibir mensagens e afins.
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    // try é usado para blocos que potencialmente pode gerar erros
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // captura e trata o erro
        tratarErroELancar(e)
    } finally { // executa ao final, independente de ter erro ou não.
        console.log('Concluído')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)