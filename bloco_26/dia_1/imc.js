const peso = 70;
const altura = 1.65;

function calcultedIMC(peso, altura) {
  const IMC = Math.round(peso / (altura * 2));

  return IMC;
}

console.log(`Seu IMC é ${calcultedIMC(peso, altura)}`);
