let array = [];
let divisao = [];

for (let index = 0; index <= 25; index += 1) {
    array.push(index);
}

for(let indexTwo = 0; indexTwo < array.length; indexTwo += 1) {
    divisao.push(array[indexTwo] / 2)
}

console.log(divisao);