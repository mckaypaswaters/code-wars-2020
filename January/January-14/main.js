function DNAStrand(dna){
    //your code here
    let arr = []
    let string = dna
    let splitString = string.split('')
    for (const element of splitString){
      if (element === 'A' || element === 'a'){
        arr.push('T')
      } else if (element === 'T' || element === 't'){
        arr.push('A')
      } else if (element === 'C' || element === 'c'){
        arr.push('G')
      } else if (element === 'G' || element === 'g'){
        arr.push('C')
      }
    }
    return arr.join('')
  }