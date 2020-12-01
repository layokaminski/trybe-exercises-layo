function countNumber(array) {
    let count = 0
    for(let position = 0; position < array.length; position += 1) {
        for(let index = 0; index < array.length; index += 1) {
        if(array[index] === array[position]) {
            count = array[position];
        }
    }
    
}
return count
}

console.log(countNumber([2, 3, 2, 5, 8, 2, 3]));