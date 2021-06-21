function resolveMath(a, b, c) {
  return new Promise((resolve, reject) => {
    const params = [a, b, c].map((number) => typeof number);

    if (params.includes("string")) reject(Error('Informe apenas números'));

    const result = (a + b) * c;

    if (result < 50) reject(Error('Valor muito baixo'));

    resolve(result);
  });
}

// Lidando com o primeiro erro

resolveMath(1, 10, "layo")
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

// Lidando com o segundo erro

resolveMath(1, 10, 2)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

// Lidando com o acerto

resolveMath(1, 10, 30)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));