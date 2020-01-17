/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" */


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