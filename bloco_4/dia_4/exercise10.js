function indexMax(array) {
    let index = 0;
    for (let key in array) {
        if (array[index] < array[key]) {
            index = key;
        }
        
    }
    return index;
}

console.log(indexMax([2, 3, 6, 7, 10, 1]));