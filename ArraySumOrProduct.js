// function manipulateArray(arr, n) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
  
//     if (sum % 2 !== 0) {
//       let product = 1;
//       for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
//       }
//       return product * n;
//     } else {
//       return sum;
//     }
//   }
  
//   let arr = [1, 2, 3, 4,1];
//   let n = 5;
  
//   let result = manipulateArray(arr, n);
  
//   console.log(result);
const ManipulateArr = (arr, n) => {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i]; 
  }

  if (sum % 2 === 0) {
    return sum;
  } else {
    return product * n;
  }
};

let arr = [3,5,7];
let n = 3;
let ans = ManipulateArr(arr, n);

console.log(ans);
console.log(ManipulateArr([1,2,3,4], 4))
