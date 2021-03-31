const numberAleatory = require('./exercise1')
jest.mock('./exercise1');

test('#Exercicio 2 - 10.3', () => {  
  numberAleatory.mockImplementation((a, b) => a / b);

  expect(numberAleatory(4, 2)).toBe(2);
  
  numberAleatory.mockRestore();
});