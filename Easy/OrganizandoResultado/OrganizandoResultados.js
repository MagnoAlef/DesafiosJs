/**
 * O sistema interno da nave realiza periodicamente uma verificação de seus principais
 * componentes para checar sua integridade. Os varios resultados dessa verificaçã
 * são emitidos em formato de listas e referência numericas desorganizadas , Para 
 * otimizar isso voce deve criar um procedimento que seja capaz de organizar 
 * todas as listas de numeros em uma unica lista ordenada.
 * Desafio :Escreva uma funcao que recebe um array bidimensional de inteiros e 
 * retorna um unico array contendo todos os numeros em ordem ascendente
 * Testes:  Entrada :[[1,5,3] , [6,19,11] , [47,128,5] , [1,93,57,42,103]] 
 * Saida : [1,1,3,5,5,6,11,19,42,47,57,93,103,128]
 * Entrada:[[1,3] , [4,8] , [7,5] , [2,6]]
 * Saida:[1,2,3,4,5,6,7,8]
 * */

function OrganizandoResultado(array){

    const novoArray = []
    array.forEach((x) => novoArray.push(...x))

    return novoArray.sort((a,b) => a-b)

}

console.log(OrganizandoResultado([[1,5,3] , [6,19,11] , [47,128,5] , [1,93,57,42,103]]))