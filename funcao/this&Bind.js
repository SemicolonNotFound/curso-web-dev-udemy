const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind amarra o this ao contexto do objeto passado ao bind.
falarDePessoa()