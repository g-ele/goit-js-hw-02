function getCommonElements(array1, array2) {
    // Change code below this line
   const newElements = [];
   for(let element of array1){
     if (array2.includes (element)){
       newElements.push (element);
     }
   }
  
  return newElements;
   // Change code above this line
  }