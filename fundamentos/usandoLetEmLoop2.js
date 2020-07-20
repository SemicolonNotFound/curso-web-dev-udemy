const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// o let possui "memoria" então irá imprimir os valores durante o loop.
// é um closure => será explicado mais para frente