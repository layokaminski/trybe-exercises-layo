const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = [];
  let number = 0;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      number += 1;
      results += number
    } else {
      results += characters[i];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

// TDD - Test Driven Development

assert.strictEqual(removeVowels(parameter), result);