function indexMax(array) {
    let index = 0;
    for (let key in array) {
        if (array[key] < array[index]) {
            index = key;
        }
        
    }
    return index;
}

console.log(indexMax([2, 4, 6, 7, 10, 0, -3]));