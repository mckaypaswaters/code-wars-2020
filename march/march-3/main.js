/**  
* ? Write a function that accepts an array of 10 integers (between 0 and 9), 
* ? that returns a string of those numbers in the form of a phone number.

* ? Example:

* * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

* ?The returned format must be correct in order to complete this challenge.
* ? Don't forget the space after the closing parentheses! 
**/


// function createPhoneNumber(arr){
//     console.log(arr.length)
//     if(arr.length < 10){
//       console.log('Enter a valid phone number')
//     }
//     else if(arr.length > 10){
//       console.log('Enter a valid phone number')
//     }
//     else {
//     return(`(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`)
//     }
//   }

/** 
* ? Given a string of words, you need to find the highest scoring word.
* ? Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
* ? You need to return the highest scoring word as a string.
* ?If two words score the same, return the word that appears earliest in the original string.
* ? All letters will be lowercase and all inputs will be valid.
**/ 

// First off, each letter needs to be given a value
// Then you need to split up each string into individual letters
// There needs to be a way to determine the separation of words
// Add up all the letters within a  word
// Return the highest "scoring" word
