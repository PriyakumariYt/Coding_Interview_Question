const FindMode = (array)=>{
let max = 0
let mode = "";
let count = {}
for(let elem of array){
  count[elem] = (count[elem] ||0) + 1
  if(count[elem]> max){
    max = count[elem]
    mode = elem
  }
}
return mode
}
console.log(FindMode([1,3,4,5,5,6,7,5]))