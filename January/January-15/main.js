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