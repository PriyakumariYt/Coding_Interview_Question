const LengthOfLastWord = (str)=>{
    let words = str.split(' ');
    return words[words.length - 1].length;
    };
console.log(LengthOfLastWord("Hello World")); // 5
// SECOND METHOD
const LastWordLength =(str) =>{
    let word = 0
    for(let i = str.length-1 ;i>=0; i--){
        if (str[i]!== ' ') {
            word++
        } else if (word > 0) {
            return word
        }
    }
    return word
}
console.log(LastWordLength("Hello worlds"))
