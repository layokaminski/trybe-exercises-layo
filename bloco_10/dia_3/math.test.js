const math = require('./math');
jest.mock("./math");

test("#subtrair", () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(3, 1);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
});

test("#multiplicar", () => {
  math.multiplicar.mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

test("#somar", () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test("#dividir", () => {
  math.dividir.mockReturnValue(15);
  math.dividir(2, 5);

  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(2, 5);
});

test("#subtrair", () => {
const spySubtrair = jest.spyOn(math, 'subtrair');

spySubtrair.mockReturnValue(20);

});
