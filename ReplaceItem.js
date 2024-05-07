const arr = [3, 4,4,4, 5, 6,4, 7];
const replace = arr.map(item => (item === 4 ? 2 : item));
console.log(replace);

//2ND WAY
const replaceValue = 2; 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        arr[i] = replaceValue;
    }
}
console.log(arr); 

//3rd way
const replacedArray = arr.join(',').replaceAll('4', '2').split(',').map(Number);

console.log(replacedArray);