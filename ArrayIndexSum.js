//array index sum like first index is "1234" so the sum of all number is becomes 10 then next index sum and its becomes 11 and so on


var arr = ["1234", "56", "123", "789", "456"];
for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
console.log(sum)
 }