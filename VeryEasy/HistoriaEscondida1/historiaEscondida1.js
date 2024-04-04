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