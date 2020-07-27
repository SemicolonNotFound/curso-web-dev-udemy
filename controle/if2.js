function teste1(num) {
    // quando o bloco não tem chaves ele fica associado a apenas uma sentença/linha. Nesse caso o final irá ser imprimido de qualquer forma.
    if(num > 7) 
        console.log(num)
    console.log('Final')
}

// teste1(6)
// teste1(8)

function teste2(num) {
    // sentença está vazia com ; | cuidado. Não usar.
    if(num > 7)
        ; 
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)