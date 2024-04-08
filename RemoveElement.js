const RemoveElement =(arr)=>{
let result = []
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
    }
}
return result
}

// 2ND WAY? SET METHOD

const Remove=(arr)=>{
return ans = [...new Set(arr)]

}
let arr = [56,1,2,1,3,4,3,5,7,4,5]
console.log(RemoveElement(arr))
console.log(Remove(arr))