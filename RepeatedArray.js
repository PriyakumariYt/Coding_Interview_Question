function findRepeatedNumbers(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.lastIndexOf(item) === index);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 3, 7, 8, 3, 9, 9, 10];
const repeated = findRepeatedNumbers(numbers);
console.log("Repeated numbers:", repeated); // Output: [3, 9]

function findRepeatedNumbers(arr) {
    let repeatedNumbers = {};
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (repeatedNumbers[num]) {
            repeatedNumbers[num]++;
        } else {
            repeatedNumbers[num] = 1;
        }
    }
    
    let result = [];
    for (let num in repeatedNumbers) {
        if (repeatedNumbers[num] > 1) {
            result.push(parseInt(num));
        }
    }
    
    return result;
}

// const numbers = [1, 2, 3, 4, 5, 6, 3, 7, 8, 3, 9, 9, 10];
// const repeated = findRepeatedNumbers(numbers);
// console.log("Repeated numbers:", repeated);



// FIND THE SUM OF ELEMENT WHOSE OCCURENCE IS 2
var arr = [2,2,7,7,5,5,3,6]
var obj = {}
for(let i = 0; i<arr.length; i++){
  var num = arr[i]
  if(obj[num]===undefined){
    obj[num] = 1
  }
  else{
    obj[num] = obj[num] + 1
  }
}
var sum = 0
for(let k in obj){
  // console.log(k, " ",obj[k])
  if(obj[k] === 2){
    sum = sum + +k
  }
}
console.log(sum)