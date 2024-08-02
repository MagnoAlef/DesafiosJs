/**
 * Mais uma vez a equipe de manutanção solicitou a sua ajuda para analisar o desempenho dos computadores
 * portateis da equipe de reconhecimento . Dessa vez ,  no entanto , o procedimento que voce ficou
 * encarregado de testar envolve calculos matematicos e voce ira utilizar o calculo do fatorial de um determinado
 * numero para isso . portanto sera preciso criar um procedimento que seja capaz de calcular o fatorial
 * de qualquer numero inteiro positivo sem utilizar estruturas de repetição.
 * Desafio: Escreva uma função que recebe um numero e retorna o seu fatorial sem utilizar
 * nenhuma estrutura de repetição(While,Dowhile ,for,etc). O fatorial de um numero e igual a multiplicação
 * de todos os inteiros positivos menores ou iguais a ele.Ela deve ser capaz de retornar numeros corretos
 * mesmo  para valores altos.
 *
 * Entrada : 5
 * Saida : 120
 *
 * Entrada: 0
 * Saida:1
 *
 * Entrada : 32
 * Saida:26313083693369350167218012160000000n
 */

function fatorial(num) {
  console.log("num", num);
  if (num === 0) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

console.log("fatorial", fatorial(5));
