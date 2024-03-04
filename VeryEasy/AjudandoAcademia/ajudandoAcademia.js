function media(...number){
    const soma = number.reduce((acumulado , total) => acumulado+=total , 0)
    return soma / number.length
}

console.log(media(10,9,6,8,9,1,5,7))
console.log(media(2,5,7,1,-2))
console.log(media(10,10,10,10,9))
console.log(media(25,75))