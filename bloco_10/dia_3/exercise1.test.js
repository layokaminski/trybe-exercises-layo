const numberAleatory = require('./exercise1')
jest.mock('./exercise1');

test('Verificar funcionalidade da numberAleatory', () => {  
  numberAleatory.mockReturnValue(10);

  numberAleatory();
  expect(numberAleatory).toHaveBeenCalled();
  expect(numberAleatory()).toBe(10);
  expect(numberAleatory).toHaveBeenCalledTimes(2);
});