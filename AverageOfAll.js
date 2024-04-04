const AverageOfALL = (arr)=>{
    let total = 0
    for(let i = 0; i<arr.length;i++){
        total += arr[i]
    }
    return total/arr.length
}
// let arr = [2,5,6,9,0,8,7]
let arr = [2, 5, 0, 9]
console.log(AverageOfALL(arr))
