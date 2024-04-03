const FindMaximum = (arr)=>{
    let max = -Infinity
    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
let arr = [-4, 0,8, 2,-54]
console.log(FindMaximum(arr))