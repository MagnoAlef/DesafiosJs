/**
 * A biblioteca Interplanetaria acumula conhecimento de todas as partes da galaxia , possuindo uma acervo gigantesco
 * e muito rico.Todas as publicações são organizadas por autor e para isso o ultimo nome do autor e utilizado
 * para identificação.A direção da biblioteca precisa que voce crie um programa para converter o nome completo
 * de um autor para o nome abreviado corretamente no formato utilizado na organização das publicações.
 * Desafio:Escreva uma função que receba uma string contendo um nome completo e retorna uma string com todos
 * os nomes , exceto o ultimo abreviados e o ultimo nome em letras maisculas antes das abreviações
 * separado por virgula.
 * Testes:Entrada ("Magno Alef Barroso")
 * Saida('BARROSO , M ,A')
 * Entrada ("Juliana Aparecida Gomes de Oliveira")
 * Saida('OLIVEIRA , J , A , G , D')
 */

function BibliotecaInterplenetaria(string){
    const nome   = string.split(' ')
    let initials = ''
    for (let i = 0; i < nome.length - 1; i++) {
        initials += ` ${nome[i][0].toUpperCase()}.`;
      }
      return `${nome[nome.length - 1].toUpperCase()},${initials}`
    }


console.log(BibliotecaInterplenetaria('Magno Alef Barroso'))
