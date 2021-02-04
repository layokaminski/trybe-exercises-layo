function hydrate(string) {
  let sumNumbers = 0;
  let numbers = string.match(/\d+/g);
  let returnString = '';

  numbers.forEach(element => {
    sumNumbers += parseInt(element, 10);

    if (sumNumbers === 1) {
      returnString = `${sumNumbers} copo de água`;
    } else {
      returnString = `${sumNumbers} copos de água`;
    }
  });
  return returnString;
}

module.exports = hydrate;