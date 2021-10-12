// Provided test cases

// palindrome(“race car”) should return true
// palindrome(“not a palindrome”) should return false
// palindrome(“A man, a plan, a canal. Panama”) should return true
// palindrome(“never odd or even”) should return true
// palindrome(“nope”) should return false
// palindrome(“almostomla”) should return false
// palindrome(“My age is 0, 0 si ega ym.”) should return true
// palindrome(“1 eye for of 1 eye.”) should return false
// palindrome(“0_0 (: /-\ :) 0–0”) should return true

// ------------------------------------------------------------------

// To pass the last test case, we can use two Regular Expressions:

// /[^A-Za-z0–9]/g  

// [^A-Z] matches anything that is not enclosed between A and 
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9
// [^_] matches anything that does not enclose _

// or

// /[\W_]/g

// \W removes all non-alphanumeric characters:
// \W matches any non-word character
// \W is equivalent to [^A-Za-z0–9_]
// \W matches anything that is not enclosed in the brackets