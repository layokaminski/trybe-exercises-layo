const exercise4 = require('./exercise4')
jest.mock('./exercise4');

test('#Exercicio 5 - 10.3 - Primeira função', () => {  
  const spyUppercase = jest.spyOn(exercise4, 'uppercase')
  .mockImplementation((string) => string.toLowerCase());

  expect(spyUppercase('LAYO')).toBe('layo');

  spyUppercase.mockReset();
  expect(spyUppercase('layo')).toBe(undefined);
});