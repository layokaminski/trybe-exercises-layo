function techList(array, name) {
  let newArray = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort()
    .forEach((element) => {
      newArray.push({ tech: element, name })
    });

  return newArray;
}

module.exports = techList;