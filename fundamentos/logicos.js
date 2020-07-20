function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete // operador unário

    // quando omitimos a chave ele entende o mesmo do valor como o nome da chave
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(false, true))