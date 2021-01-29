const promise = new Promise((resolve, reject) => {
  const result = Array.from({ length: 10 }, () => 
  Math.pow(Math.floor(Math.random(1) * 50), 2))
  .reduce((acumulator, current) => acumulator + current);

  if (result > 8000) {
    reject()
  }
  resolve(result);
})
  .then(result => [2, 3, 5, 10].map(number => Math.round(result / number)))
  .then((array) => console.log(array.reduce((acumulator, current) => acumulator + current)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))