const ReplaceString = (str, oldSubstr, newSubstr) => {
    return str.replaceAll(oldSubstr, newSubstr);
}

const originalString = "Hello, world! Hello again.";
const newString = ReplaceString(originalString, "Hello", "Hi");
console.log(newString);