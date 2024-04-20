const FindMean =(arr)=>{
let total = 0
for(let i=0; i<arr.length; i++){
  total += arr[i]
}
return Math.floor(total/arr.length)
}
console.log(FindMean([10,12,14,2,3]))
console.log(FindMean([2, 5, 0, 9]))