const checkPalindrome = (word) => {

    // convert string to an array
    const arrayValues = word.split('');
    // console.log('arrayValues: ', arrayValues);

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // console.log('reverseArrayValues: ', reverseArrayValues);

    // convert array to string
    const reverseWord = reverseArrayValues.join('');
    // console.log('reverseWord: ', reverseWord);

    if (word == reverseWord) {
        // console.log('true: ', true);
        return true
    }
    else {
        // console.log('false: ', false);
        return false
    }
}

checkPalindrome("racecar");

// console.log('test')