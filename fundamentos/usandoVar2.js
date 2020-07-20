var numero = 1
{
    var numero = 2
    console.log("dentro: "+numero)
}
console.log("fora: "+numero)

// var terá o mesmo escopo global. O bloco dentro irá sobreescrever.