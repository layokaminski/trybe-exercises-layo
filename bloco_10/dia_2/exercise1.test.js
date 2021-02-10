const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test ('uppercase transformando layo em LAYO', async () => {
  await uppercase('layo', (str) => {
    expect(str).toBe('LAYO');
  });
});