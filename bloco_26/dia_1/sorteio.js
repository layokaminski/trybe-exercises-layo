const readline = require('readline-sync');

function game(number, guessNumber) {
  if (number != guessNumber) {
    console.log(`Opa, não foi dessa vez. O número era ${number}`);
    return;
  }

  console.log(`Parabéns, número correto!`);
}

function runtimeGame() {
  const number = Math.round(Math.random() * 10);

  const guessNumber = readline.questionInt('Digite um número entre 0 e 10: ');

  game(number, guessNumber);

  const playAgain = readline.question('Gostaria de jogar novamente? (s) ou (n): ');

  if (playAgain === 'n') {
    console.log('Nos vemos na próxima!');
    return;
  }

  runtimeGame();
}

runtimeGame();
