const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens);

const arrayArrumado = array => oddsAndEvens.sort((a, b) => a - b);

arrayArrumado(oddsAndEvens)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
