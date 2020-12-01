function wordMax(test) {
    let index = 0;
    let result = ''
    for (let key in test) {
        if (test[key].length -1 > test[index].length) {
            index = key
            result = test[index];
        } 
    }
    return result;
    }

console.log(wordMax(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));