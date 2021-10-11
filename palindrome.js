const checkPalindrome = (word) => {

    // convert string to an array
    const arrayValues = word.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseWord = reverseArrayValues.join('');

    if (word == reverseWord) {
        return true
    }
    else {
        return false
    }
}
checkPalindrome("racecar");

// console.log('test')