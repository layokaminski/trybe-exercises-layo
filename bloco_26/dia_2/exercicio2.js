function resolveMath(a, b, c) {
  return new Promise((resolve, reject) => {
    const params = [a, b, c].map((number) => typeof number);

    if (params.includes("string")) reject(Error('Informe apenas números'));

    const result = (a + b) * c;

    if (result < 50) reject(Error('Valor muito baixo'));

    resolve(result);
  });
}

const numberOne = Math.floor(Math.random() * 100 + 1);
const numberTwo = Math.floor(Math.random() * 100 + 1);
const numberThree = Math.floor(Math.random() * 100 + 1);

resolveMath(numberOne, numberTwo, numberThree)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
