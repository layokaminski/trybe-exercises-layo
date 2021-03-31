const numberAleatory = require('./exercise1')
jest.mock('./exercise1');

test('#Exercicio 3 - 10.3', () => {  
  numberAleatory.mockImplementation((a, b, c) => a * b * c);

  expect(numberAleatory(4, 2, 2)).toBe(16);
  
  numberAleatory.mockRestore();

  numberAleatory.mockImplementation((a) => a * 2);
  expect(numberAleatory(4)).toBe(8);
});