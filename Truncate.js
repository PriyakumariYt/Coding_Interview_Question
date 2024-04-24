const TruncateString = (str, num)=>{
    if(num<=0){
return str
    } else if (str.length > num) {
        return str.slice(0, num).concat("....")
}
return str; 
}

console.log(TruncateString("This is a very long string that needs to be truncated.",20))
console.log(TruncateString("my name is priya kumari.",10))