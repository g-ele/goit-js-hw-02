function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  
    for (let item of order) {
      total += item;
    }
  
    // Change code above this line
    return total;
  }