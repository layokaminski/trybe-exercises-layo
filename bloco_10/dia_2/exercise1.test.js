const uppercase = require('./exercise1');

test (`uppercase 'test' to equal 'TEST'`, async () => {
  await uppercase('layo', (str) => {
    expect(str).toBe('LAYO');
  });
});