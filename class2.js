// CLASS 2

// Operators. Remainder.
let remainder = 48 % 5;
console.log(remainder);

// Data type: boolean
// 0 = false
// 1 = true

let newRemainder = 22 % 2;
console.log(newRemainder);

// Strings
let str1 = "This is a string"; // double quotes
let str2 = "Iryna said 'We can wear strings'"; // single quotes inside a string
let str3 = 'Iryna said "We can wear strings"';
console.log(str1, str2, str3);

let str4 = "Iryna said \"We can wear strings\""; // escape character (backslash)
console.log(str4);

// Bracket notation
console.log(str1[0]); // we got the 1st character of the str1 string, index of which is 0
console.log(str1[1]); // 2nd char - index 1 - formula is (2 - 1 = 1)

// length of string
let str1Length = str1.length;
console.log('The length of str1: ', str1Length);
console.log('Last char of str1 is ', str1[str1Length - 1]);

let str2Length = str2.length;
console.log('The length of str2: ', str2Length);
console.log('Last char of str2 is ', str2[str2Length - 1]);

let str4Length = str4.length;
console.log('The length of str4: ', str4Length);
console.log('Second last char of str4 is ', str4[str4Length - 2]);

/* Homework
1. Create a long string (or use existing, like str2)
2. Declare a new variable
3. Using characters from your long string, create strings like "I am a strong woman", "I have 2 daughters"
Note: make sure to create new variables for each character that you're reusing in your formula.
*/
// For example:
// "I" is repeated twise, so it needs to be a separate variable:
let strI = str2[0];
let newString = strI + ' ' + str2[4] + 'm';
console.log(newString);
