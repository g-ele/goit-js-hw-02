function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
  
    for (const number of numbers) {
       numbers += number;
  
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
  
    return filteredNumbers;
    // Change code above this line
  }
  