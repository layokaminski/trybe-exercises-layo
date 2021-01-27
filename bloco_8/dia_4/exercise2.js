const assert = require('assert')

// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// escreva sum abaixo

function sum(...args) {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)