function checkPalindrome(word){
    let newWord = [];
    for (let index = 0; index < word.length; index +=1) {
        newWord.push(word[index])
    }
    newWord.reverse()
        for (let index = 0; index < word.length; index +=1) {
        if(word[index] === newWord[index]) {
            return true
        }
        else {
            return false
        }
}
}

console.log(checkPalindrome('arara'))
console.log(checkPalindrome('desenvolvimento'))

