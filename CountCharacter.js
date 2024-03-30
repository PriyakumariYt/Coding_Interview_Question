const CountCharacter = (word,char)=>{
 word = word.toLowerCase();
 char = char.toLowerCase()
let totalCount = word.split("").reduce((accumelator,curChar)=>{
    if(curChar=== char){
        accumelator++;
    }
    return accumelator
},0)
return totalCount
}
console.log(CountCharacter("mynameispriyaiisingh", "I"))