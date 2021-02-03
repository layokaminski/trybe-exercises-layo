const decode = require('../exercises/decode');

describe ('Testando a função decode', () => {
  it ('Verificar se decode é uma função.', () => {
    expect(typeof decode).toBe('function');
  });
  it ('Verificar se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u.', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it ('Verificar se os números 6, 7, 8, 9 e 0 são convertido nas vogais a, e, i, o, u.', () => {
    expect(decode('67890')).not.toBe('aeiou');
  });
  it ('Verificar se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('Hello')).toHaveLength(5);
  });
});