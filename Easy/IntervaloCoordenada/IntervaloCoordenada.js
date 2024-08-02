/**
 * O capitao da sua nave precisa que voce implemente no sistema principal uma forma de obter todas as coordenadas abaixo de um determinado ponto partindo da origem
 * (0,0) e retorne isso para o sistema em uma lista ordenada crescente. As coordenadas são escritas na forma de pares ordenadados(x,y)
 * 
 *DESAFIO:Escreva uma função que receba um par ordenado(x,y) e retorne um array de pares(x,y) onde cada um deles possui um x e y  menos ou igual ao par recebido
 em ordem crescente.
 Os pares devem ser ordenados de forma que primeiro aumente o valor de y e depois o valor de x . APenas o quadrante onde x e y são positivos devem ser considerado.
 TESTE:ENTRADA : [2,2]
 Saida : [[0,0] , [0,1],[2,0] , [1,0] , [1,1] , [1,2], [2,0] , [2,1] , [2,2]]
 */

function IntervaloCoordenada(pair) {
  const result = [];

  for (let i = 0; i <= pair[0]; i++) {
    for (let j = 0; j <= pair[1]; j++) {
      result.push([i, j]);
    }
  }
  return result;
}

console.log(IntervaloCoordenada([2, 2]));
console.log(IntervaloCoordenada([-2, -2]));
