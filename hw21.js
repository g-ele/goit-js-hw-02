function findLongestWord(string) {
    // Change code below this line
  
  
  let stringSplit= string.split(" ");
  let longestWord=" ";
  for(let word of stringSplit){
    if (word.length>longestWord.length){
      longestWord=word;
    }
  }
  return longestWord;
  
    // Change code above this line
  }
  