// var arr = []
// var str = ""
// for(let i = 1; i<=10;i++){
// str+= i
// arr.push(str)
// }
// console.log(arr)
/*----------------------------------------------------------*/ 
// var arr = []
// var str = ""
// for(let i = 1; i<=10; i++){
//   if(i%2==0){
//     str+= i
//     arr.push(str)
//   }
// }
// console.log(arr)


// var res = [];
// var str = "";
// for (let i = 1; i <= 10; i++) {
//   str += i;
//   res.push(str);
// }
// console.log(res);

var n = 3
var price = [100,20,40]
var quantity = [2,1,2]
var mult = 1;
var sum = 0;

  for(let i = 0; i<n; i++){
     mult = price[i]* quantity[i]
     sum = sum + mult 
    //  console.log(sum)
  }
  console.log(sum)
/*  
* * * *
* * *
* *         //solution
*
*/
  var num = 4;
for (let i = 1; i <= num; i++) {
  let res = "";
  for (let j = i; j <= num; j++) {
    res += "* ";
  }
  console.log(res)
}