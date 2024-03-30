const LongestWord =(str)=>{
   if(str.trim().length===0){
    return false; 
   } 
  let words = str.split(" ")
//    console.log(words)
   words = words.sort((a,b) => b.length - a.length)
    // console.log(words)
   return words[0]
}
 console.log(LongestWord("my name is Priya Kumariyt"))