const sum = require('../exercises/exercise1-part1');

describe ('Requisitos - Exercício 1', () => {
  it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(5).toEqual(sum(2, 3));
  });
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0, 0));
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0, 0));
  });
  it('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});