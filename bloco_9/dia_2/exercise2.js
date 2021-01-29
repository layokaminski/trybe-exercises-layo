const array = [];

function createArray(array) {
  for (let index = 0; index < 10; index += 1) {
    const number = Math.floor(Math.random(1) * 50);
    const numberSquared = Math.pow(number, 2);
    array.push(numberSquared);
  }
}
createArray(array);

const sumArray = (array) => array.reduce((result, number) => result + number);

const promise = new Promise((resolve, reject) => {
  const newArray = sumArray(array);

  if (newArray > 8000) {
    return reject(newArray)
  }
  resolve(newArray);
})
  .then(newArray => console.log(`Que sucesso =) nosso número foi ${newArray}`))
  .catch(newArray => console.log(`Que fracasso =( Nosso número foi ${newArray}`));