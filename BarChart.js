// const BarChart = (arr)=>{
// let barArr = arr.map((curElem,index)=>{
//     let star = ""
//     let num = 0
//     while(num<curElem){
//         star = star + "*"
//         num++
//     }
//     return `${index+1}: ${star}`
// })
// return barArr.join("\n")
// }
// console.log(BarChart([5,4,3,2,1,7]))
const BarChart = (arr)=>{
return arr.map((curElem,index)=>{
      
        return `${index + 1}: ${"*".repeat(curElem)}`
    }).join("\n")
    }
    console.log(BarChart([5,4,3,2,1,7]))