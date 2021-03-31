const exercise4 = require('./exercise4');

test('#Exercicio 5 - 10.3 - Primeira função', () => {  
  const spyUppercase = jest.spyOn(exercise4, 'uppercase')
  .mockImplementation((string) => string.toLowerCase());

  expect(spyUppercase('LAYO')).toBe('layo');

  exercise4.uppercase.mockRestore();

  expect(exercise4.uppercase('layo')).toBe('LAYO');
});