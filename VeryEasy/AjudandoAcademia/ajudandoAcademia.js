//Minha solução
function media(...number){
    const soma = number.reduce((acumulado , total) => acumulado+=total , 0)
    return soma / number.length
}

console.log(media(10,9,6,8,9,1,5,7))
console.log(media(2,5,7,1,-2))
console.log(media(10,10,10,10,9))
console.log(media(25,75))

//Solucao professor

function average(numbers){
let sum = 0
numbers.forEach(number => {
    sum +=  number // sum = sum + nuber
})
const average = sum / numbers.length
return average
}

console.log(average([10,9,6,8,9,1,5,7]))
console.log(average([2,5,7,1,-2]))
console.log(average([10,10,10,10,9]))
console.log(average([25,75]))