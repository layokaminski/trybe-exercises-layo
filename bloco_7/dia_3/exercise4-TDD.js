const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (array, string) => {
 
  for (let index = 0; index < array.length; index += 1) {
    if (string === array[index]) {
      return index;
    }; 
  };

  return -1;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);