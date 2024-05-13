

//Minha solução
function inverterPalavras(string) {
    const palavras = string.split(' ');
    const invertidas = palavras.map(palavra => palavra.split('').reverse().join(''));
    return invertidas.join(' ');
  }

console.log(inverterPalavras('Lorem ipsum dolore sec avanti'))
console.log(inverterPalavras('Hello'))
console.log(inverterPalavras('May the force be with you'))
console.log(inverterPalavras('Its over nine thousand'))

//Professor
function invertWords(str) {
    const wordsArray = str.split(' ')
    const invertedWords = wordsArray.map(word => {
      const lowerCaseWord = word.toLowerCase()
      return lowerCaseWord.split('').reverse().join('')
    })
    
    return invertedWords.join(' ')
  }

  console.log(invertWords('Lorem ipsum dolore sec avanti'))
console.log(invertWords('Hello'))
console.log(invertWords('May the force be with you'))
console.log(invertWords('Its over nine thousand'))