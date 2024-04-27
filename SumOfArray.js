var arr = [1,2,3,4,5]
var sum = 0
for(let i = 0; i<arr.length; i++){
sum = sum + arr[i]
}
console.log(sum)

// 2nd way in (...) operators
const SumOfArray = (numbers) => {
    return numbers.reduce((accum, curval) => {
      return accum + curval;
    }, 0);
  }
  
  console.log(SumOfArray([2, 4, 6, 7, 5, 1, 2, 5, 12])); 