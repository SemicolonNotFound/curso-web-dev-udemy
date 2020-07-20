const valores =   [7.7, 8.9, 6.3, 9.2] // Array literal, definido na declaração
console.log(valores[0], valores[3]) // Listando array por índice.

valores[4] = 10
console.log(valores)

valores[10] = 2.4 // declaramos que o indice 10 do Array recebe valor 2.4
console.log(valores) //Porém para imprimir o array ele mostra itens vazios entre o indice 5 e 9

console.log(valores.length) //captura o tamanho total do array, quantos elementos tem no caso.

valores.push({id: 3}, false, null, 'teste') //Array recebe vários tipos e podemos adicionar
console.log(valores)

console.log(valores.pop()) // Ele pega o último valor do array e retorna e depois remove do array
delete valores[0] // removerá o valor do índice 0 do array
console.log(valores)

console.log(typeof valores) // o array é do tipo object em JS