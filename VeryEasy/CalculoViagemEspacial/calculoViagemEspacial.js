function quadratica(number) {

    const digitos = number.toString().split('').map(Number);

    console.log('digitos' , digitos)
const teste = []
    for (let i = 0 ; i < digitos.length ; i++){
        teste.push(digitos[i] * digitos[i])
    }
    const numeroFinal = Number(teste.join(''));
    console.log('teste',numeroFinal)
    return numeroFinal
}

console.log( 'funcaoQuadratica' , quadratica(3514))

//Professor

function squareDigits(num) {
    const digitsArray = num.toString().split('')
    return Number(digitsArray.map(number => number ** 2).join(''))
  }

  console.log( 'squareDigits' , squareDigits(3514))