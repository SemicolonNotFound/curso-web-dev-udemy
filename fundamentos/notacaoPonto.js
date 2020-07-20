console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // notacao descritiva.

console.log(obj1.nome)

function Obj(nome, preco) {
    this.nome = nome // recebo o atributo por parametro e defino o para nome. Ficando visivel para quem instanciar Obj
    this.preco = preco
    // podemos criar e repassar uma funcao tbm para o obj
    this.exec = function() { 
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira', 12) // crio um objeto, passando primeiro o atributo nome e entao preco.
const obj3 = new Obj('Mesa', 15)

console.log(obj2.nome + ' por $' + obj2.preco)
console.log(obj3.nome + ' por $' + obj2.preco)

obj3.exec() // invocando funcao.