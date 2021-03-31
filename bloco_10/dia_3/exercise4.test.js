const { uppercase, oneLetter, concatStrings } = require('./exercise4')
jest.mock('./exercise4');

test('#Exercicio 4 - 10.3 - Primeira função', () => {  
  uppercase.mockImplementation((string) => string.toLowerCase());

  expect(uppercase('LAYO')).toBe('layo');
});

test('#Exercicio 4 - 10.3 - Segunda função', () => {  
  oneLetter.mockImplementation((string) => string[string.length - 1]);

  expect(oneLetter('Layo')).toBe('o');
});

test('#Exercicio 4 - 10.3 - Terceira função', () => {  
  concatStrings.mockImplementation((stringOne, stringTwo, stringThree) => `${stringOne} ${stringTwo} ${stringThree}`);

  expect(concatStrings('Trybe', 'a', 'melhor')).toBe('Trybe a melhor');
});