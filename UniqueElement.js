var str = ["P", "R", "I", "Y", "A","A", "B","Y"];
var result = [];
for (let i = 0; i < str.length; i++) {
  if (!result.includes(str[i])) {
    result.push(str[i]);
  }
}
console.log(result)