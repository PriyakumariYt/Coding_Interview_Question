const FindMinimum = (arr)=>{
    let min = Infinity
    for(let i = 0; i<arr.length; i++){
if(arr[i]<min){
    min = arr[i]
}
    }
    return min
}
let arr = [-4, 0,8, 2,-54]
console.log(FindMinimum(arr))