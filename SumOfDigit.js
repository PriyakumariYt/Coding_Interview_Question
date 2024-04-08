 const sumOfDigit = (num) => {
let arr = Array.from(String(num),Number)
// console.log(arr)
return arr.reduce((accum,curElem)=>accum += curElem,0)
}
console.log(sumOfDigit(12323546))