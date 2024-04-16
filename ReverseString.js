const ReverseString = (str)=>{
let ans = ""
for(let i=str.length-1; i>=0; i--){
    ans += str[i]
}
return ans
}

// 2nd way
const StringReverse= (str)=>{
return str.split('').reverse().join("")
}


console.log(ReverseString("iramuKayirP"))
console.log(StringReverse("PriyaKumari"))