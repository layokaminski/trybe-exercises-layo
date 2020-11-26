let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0 
let medium = 0

for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index]
        medium = sum / numbers.length;
}   

console.log(sum);
console.log(medium);