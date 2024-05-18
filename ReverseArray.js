const arr = [1,2,3,4,5]
const ReverseArray = ()=>{
    let rev = []
    for(let i = arr.length-1; i >= 0; i--){
        rev.push(arr[i])
}
return rev
}
console.log(ReverseArray(arr))