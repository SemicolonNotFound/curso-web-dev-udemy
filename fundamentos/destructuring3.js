function random({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random({min:40, max:50}))

const obj = { max: 50, min: 40}
console.log(random(obj))
console.log(random({min: 955}))
console.log(random({}))
// erro
// console.log(random())