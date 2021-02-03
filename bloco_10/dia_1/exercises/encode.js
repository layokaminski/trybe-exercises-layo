function encode(string) {
  let newString = '';
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in string) {
    if (string[key] === '1' || string[key] === '2' || string[key] === '3' || string[key] === '4' || string[key] === '5') {
      newString += vowels[string[key]];
    } else {
      newString += string[key];
    }
  }
  return newString;
}

module.exports = encode;