const myRemove = require('./exercise2-part1');

describe('Requisitos - Exercício 2', () => {
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
  });
  it ('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})