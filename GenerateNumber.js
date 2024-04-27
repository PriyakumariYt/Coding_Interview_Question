const GenerateNumberRange = (a,b)=>{
let arr= []
while(a<=b){
    arr.push(a)
    a++
}
// 2nd way
for(let i=a; i<=b;i++){
    arr.push(i)
}
return arr
}
console.log(GenerateNumberRange(0,7))
console.log(GenerateNumberRange(-2,8))
// 3rd way in recursive method 

GenrateRecrusiveNumber = (a,b,arr=[]) =>{
    // base case
    if(a<=b){
        arr.push(a)
        return GenrateRecrusiveNumber(a + 1,b,arr)
    }
return arr
}
console.log(GenrateRecrusiveNumber(0,7))