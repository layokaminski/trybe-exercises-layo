const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso? ');;
const altura = readline.questionFloat('Qual sua altura? ');;;

function calcultedIMC(peso, altura) {
  const imc = Math.round(peso / Math.pow(altura, 2));

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 29.9) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 34.9) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 39.9) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}
