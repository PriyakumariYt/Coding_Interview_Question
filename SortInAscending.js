const SortAscending = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  };
  
  let arr = [5, 4, 8, 9, 75, 2];
  console.log(SortAscending(arr));