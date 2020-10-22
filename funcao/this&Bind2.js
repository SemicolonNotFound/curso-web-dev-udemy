function Pessoa() {
    this.idade = 0

    const self = this // deixa o this travado aqui nesse ponto. Dai usamos o self como sendo o this.
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/**.bind(this) */, 1000)
}

new Pessoa