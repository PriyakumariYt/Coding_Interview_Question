// const CheckPalindrome = (str)=>{
//     let rev = ""

//     for(let i =str.length-1; i>=0; i--){
//         rev = rev + str[i]
//     }
//     return rev ===str
  
// }

// 2nd way

const CheckPalindrome = (str)=>{
    str = str.toLowerCase("").replace(/\W/g, "")
    let ans = str.split("").reverse().join("")
    // console.log(ans)
   return str ===ans ?true:false;
}

// console.log(CheckPalindrome("nam an"))


const palindromeChecked = (str) =>{
    let rev = ""
    for(let i = str.length-1; i>=0; i--){
        rev = rev + str[i]
    }
    if(str === rev){
        return true
    }
    else{
        return false
    }
}
console.log(palindromeChecked("naman"))
console.log(CheckPalindrome("ritwik"))