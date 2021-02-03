const { obj1, obj2, obj3 } = require('../exercises/exercise5-part1');

describe ('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  it ('Comparando o obj1 com o obj2, returno tem que ser igual', () => {
    expect(obj1).toEqual(obj2);
  });
  it ('Comparando o obj1 com o obj3, returno tem que ser diferente', () => {
    expect(obj1).not.toEqual(obj3);
  });
});