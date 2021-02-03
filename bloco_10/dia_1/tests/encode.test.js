const encode = require('../exercises/encode');

describe ('Testando a função encode', () => {
  it ('Verificar se encode é uma função.', () => {
    expect(typeof encode).toBe('function');
  });
  it ('Verificar se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5.', () => {
    expect(encode('12345')).toBe('aeiou');
  });
  it ('Verificar se as vogais a, e, i, o, u são convertidas em 6, 7, 7, 9 e 0.', () => {
    expect(encode('aeiou')).not.toBe('67890');
  });
  it ('Verificar se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('H2ll4')).toHaveLength(5);
  });
});