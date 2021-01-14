const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const expected = sum(4, 5)
const expectedTwo = sum(0, 0)

assert.strictEqual(expected, 9, 'Quatro mais cindo é igual a nove')
assert.strictEqual(expectedTwo, 0, 'Zero mais ele mesmo é zero')
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/); 