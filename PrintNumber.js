// const printNumbers = () => {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(() => {
//             console.log(i);
//         },i * 1000);
//     }
// };

// printNumbers();

// if(4 ==="4"){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// Some Examples of NAN
// let a 
// let ans = a + 2
// console.log(ans)
// let result = "hello" *4
// console.log(result)

// // SOME EXAMPLES OF NOT DEFINED

// let b 
// console.log(b)
// console.log(a); 
//   var a = 5; 
// //   console.log(a); 
//   console.log(b); 
 
//   console.log(a)
//   var a;

/* Hoisting Explanation and Examples 👇🏻
// Definition : Hoisting is default behaviour of javascript or moving declartion of all the variable any functions on the top where scope can be either or local.
let suppose 👇🏻
console.log(myFun())
const myFun = ()=>{
    return "hello"
  }
  when i call function before declartion so it will be return refrence error(before initialization can be acces your function)
  console.log(myFun())
  but if i declartion before calling then it will be work fine
  2nd example
  👇🏻its works fine because its default bahaviour of javascript and it will return 5
  a = 5
  console.log(a)
  var a
*/

// Examples 
// console.log(myFun())
const myFun = ()=>{
    return "hello"
  
  }
// console.log(myFun())

a = 5
console.log(a)
var a