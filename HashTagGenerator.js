// first letter should be uppercase and split all space and not more then 200 char otherwise is return false
const HashTagGenerator = (str)=>{
if(str.length>200 || str.trim ===0){
    return false
}
 str = str.split(" ")
// console.log(str[1].toUpperCase())

str = str.map((curElem)=> curElem.replace(curElem[0],curElem[0].toUpperCase())
)
str = str.join("")
let ans = `#${str}`
return ans
}
console.log(HashTagGenerator("my name is priya kumari"))