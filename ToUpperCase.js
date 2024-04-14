// const CheckUpperCase = (char)=>{
//     let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//  uppercaseChars.includes(char)

// }
// 2ND way

const CheckUpperCase = (char) => {
    const charCode = char.charCodeAt(0);
    return charCode >= 65 && charCode <= 90; 
}

console.log(CheckUpperCase("s")); // false
console.log(CheckUpperCase("P")); // true
console.log(CheckUpperCase("w")); // false

