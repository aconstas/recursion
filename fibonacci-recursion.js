function fibsRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibArray = fibsRec(n - 1);
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
      return fibArray;
    }
  }
  
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  