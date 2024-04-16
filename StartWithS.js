// const StartWithS=(str ,string)=>{
//     return(str.toLowerCase().startsWith(string.toLowerCase()))

// }
// 2ND WAY
const StartWithS=(str ,string)=>{
    str = str.toLowerCase()
    return str.slice(0, string.length) === string.toLowerCase();
    }
    console.log(StartWithS("Priya Kumari", "priya"))
    console.log(StartWithS("riya Kumari", "priya"))