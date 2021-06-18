const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso? ');;
const altura = readline.questionFloat('Qual sua altura? ');;;

function calcultedIMC(peso, altura) {
  const IMC = Math.round(peso / Math.pow(altura, 2));
  return IMC;
}

console.log(`Seu IMC é ${calcultedIMC(peso, altura)}`);
