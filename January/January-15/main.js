/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */


function sumTwoSmallestNumbers(numbers) {  
    //Code here
    // console.log(Math.min(...numbers))
    // console.log(numbers)
    // let newArr = numbers
    // let newerArr = newerArr.push(newArr.splice(Math.min(...newArr), 1))
    // console.log(newerArr)
    let arr = numbers.push(numbers.splice(Math.min(...numbers), 1))
    console.log(arr)
  }
  
  sumTwoSmallestNumbers([1,2])