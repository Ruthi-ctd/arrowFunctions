// Aula 07 - 18/06/2021
// Arrow functions

let print = mensagem => mensagem;
console.log(print('Olá, bom dia'));

let soma = (n1, n2) => {
  console.log('A soma dos números ' + n1 + ' e ' + n2 + ' é igual a: ');
  return n1 + n2;
}
console.log(soma(2, 3));