//Minha solução
function maiorString(string){


    const str = string.toLowerCase()
    const stringMaior = str.split('')
    const letraMaior = stringMaior.sort()
    const result = letraMaior[letraMaior.length - 1]

    return result


 

}

console.log(maiorString('Lorem ipsum dolore sec avanti'))
console.log(maiorString('Hello'))
console.log(maiorString('May the force be with you'))
console.log(maiorString('Its over nine thousand'))

//Solução professor

function highestLetter(str) {
    const sortedLetters = str.toLowerCase().split('').sort()
    return sortedLetters[sortedLetters.length - 1]
  }
console.log(highestLetter('Lorem ipsum dolore sec avanti'))
console.log(highestLetter('Hello'))
console.log(highestLetter('May the force be with you'))
console.log(highestLetter('Its over nine thousand'))