let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = [];

for (let index = 1; index < numbers.length; index++) {
    if (numbers.length -1 == index)  {
      result.push(numbers[index] * 2);
    }
    else {
      result.push(numbers[index - 1] * numbers[index]);
    }
  }

console.log(result)