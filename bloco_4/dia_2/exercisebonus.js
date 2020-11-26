let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
console.log(numbers);
