const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distância percorrida em metros? ');
const time = readline.questionInt('Qual o tempo gasto em segundos? ');

function calcultedAverageSpeed(distance, time) {
  const AverageSpeed = Math.round(distance / time);

  return AverageSpeed;
}

console.log(`Velocidade média: ${calcultedAverageSpeed(distance, time)} m/s`);
