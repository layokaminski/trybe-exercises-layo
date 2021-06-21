function resolveMath(a, b, c) {
  return new Promise((resolve, reject) => {
    const params = [a, b, c].map((number) => typeof number);

    if (params.includes("string")) reject(Error('Informe apenas números'));

    const result = (a + b) * c;

    if (result < 50) reject(Error('Valor muito baixo'));

    resolve(result);
  });
}

async function callFunction() {
  const numberOne = Math.floor(Math.random() * 100 + 1);
  const numberTwo = Math.floor(Math.random() * 100 + 1);
  const numberThree = Math.floor(Math.random() * 100 + 1);

  try {
    const result = await resolveMath(numberOne, numberTwo, numberThree);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

callFunction();