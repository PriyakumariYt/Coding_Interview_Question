const ArrayEqual = (arr1, arr2)=>{
if(arr1.length!==arr2.length){
    return false
}
return arr1.every((curVal,index)=>curVal===arr2 [index])
}
console.log(ArrayEqual([2,3,4,5],[4,5,6,7]))
console.log(ArrayEqual([3,3,4],[3,3,4]))