const assert = require('assert');

// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((result, countingVowel) => {
    result += countingVowel.match(/a/gi).length;
    return result;
  }, 0);
};

assert.deepStrictEqual(containsA(), 20);