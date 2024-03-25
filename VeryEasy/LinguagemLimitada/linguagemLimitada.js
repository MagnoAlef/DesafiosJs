//minha solucao
function linguagemLimitada(numbers){
 const reverse = numbers.reverse()
return reverse
}

console.log(linguagemLimitada([0,9,6,8,9,1,5,7]))

//solucao professor

function linguagemLimitadaProfessor(numbers){
    const revesedArray = []
for(let i = 0 ; i < numbers.length ; i++){
    revesedArray[i] = numbers[numbers.length - 1- i]
}

return revesedArray
   }

console.log(linguagemLimitadaProfessor([0,9,6,8,9,1,5,7]))
console.log(linguagemLimitadaProfessor([true,false,false,false,true , true]))