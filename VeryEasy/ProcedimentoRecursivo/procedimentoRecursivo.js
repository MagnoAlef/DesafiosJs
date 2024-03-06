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

function recursiveChunks(num) {
    if (num === 0) return ""
    return num === 1 ? "Hello" : "Hello-" + recursiveChunks(num - 1) 
  }

console.log('recur', recursiveChunks(3))  