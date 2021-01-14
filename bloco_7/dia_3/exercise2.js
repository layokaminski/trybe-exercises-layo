const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove(arr, 3), [1, 2, 4], 'Erro: não retornou o array esperado');
assert.notDeepStrictEqual(arr, myRemove(arr, 3), 'Erro: os valores dos objetos são estritamente iguais');
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
