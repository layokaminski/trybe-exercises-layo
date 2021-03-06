const myRemoveWithoutCopy = require('../exercises/exercise3-part1');

describe ('Requisitos - Exercício 3', () => {
  it ('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  it ('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
  });
  it ('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it ('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});