
const assert = require('assert');

// 1. Dada uma matriz de matrizes, transforme em uma única matriz.

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
 return arrays.reduce((array, value) => array.concat(value)); 
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);