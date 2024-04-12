const StringCheck = (input)=>{
let num = false
let str = false
for(let i = 0; i<input.length; i++){
    if(Number(input[i])==input[i]){
num = true
    } else if(String(input[i])==input[i]){
        str = true
    }
}
if(num && str){
   return "alphanumneric"
}
else if(num){
return "number"
}else{
   return "char"
}

}
console.log(StringCheck("jh5h8h56"))
console.log(StringCheck("56633"))
console.log(StringCheck("priya"))


