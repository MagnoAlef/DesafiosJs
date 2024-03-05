//Minha solução
let hello = ''
function procedimentoRecursivo(number){
    if(number > 0) {
        hello += 'Hello-'
        number--
        procedimentoRecursivo(number)
    }
    //console.log('asas' , hello)
    return hello
}

console.log('pro',procedimentoRecursivo(2))

//Solução professor