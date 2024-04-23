const RepeatString = (str,num)=>{
    if(num >0){
        return str.repeat(num)
    } else{
        return str
    }
}
console.log(RepeatString("priya" , 5))
console.log(RepeatString("abcfd" , 0))