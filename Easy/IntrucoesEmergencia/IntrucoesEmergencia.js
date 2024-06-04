/**
 * As estacoes e naves de maior porte da frota estelar em situacoes de emergencia precisam enviar instruções
 * de navegação, importantes e que não podem ser comprometidas . Para isso algumas validações precisam ser
 * feitas nos  codigos de trnasmissao . Uma dessas validações envolve um codigo que deve possuir a mesma
 * quantidade de cada caractere que o compoe.Foi solicitado a voce que crie a funcao que validara este codigo.
 * 
 * Desafio:Escreva uma funcao que recebe uma string, verifica se ele possui a mesma quantidade de cada
 * letra que a compoe e retorna true caso possua ou false caso não possua.
 * Teste:Entrada ("This is thee")
 * Saida: true
 * Entrada:('ssd')
 * Saida: false
 * Entrada:('Loren ipsum')
 * Saida:False
 * Entrada:('qqwweerrttyy')
 * Saida:False
 */

function stringComparation(count, index, array) {
    return index !== 0 ? count === array[index - 1] : true
  }
  
  function isComparationString(str) {
    const charCount = {}
  
    for (let i = 0; i < str.length; i++) {
      charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1
    }
  
    return Object.values(charCount).every(stringComparation)
  }

  console.log('a',isComparationString('This is thee'))

  console.log('b',isComparationString('ssd'))

  console.log('c',isComparationString('Loren ipsum'))

  console.log('d',isComparationString('qqwweerrttyy'))