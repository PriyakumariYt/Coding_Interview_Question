const GenerateNumberRange = (a,b)=>{
let arr= []
// while(a<=b){
//     arr.push(a)
//     a++
// }
// 2nd way
for(let i=a; i<=b;i++){
    arr.push(i)
}
return arr
}
console.log(GenerateNumberRange(0,7))
console.log(GenerateNumberRange(-2,8))
