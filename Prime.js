var a = 2;
var b = 5;

var result = "";
for (i = a; i <= b; i++) {
  var isPrime = 1;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime++;
    }
  }
  if (i > 1 && isPrime == 1) {
    result = result + i + " ";
  }
}
// console.log(result);
// CHECK PRIME NUMBER 1 T0 100
function primeNo_checked(num) {
  let count = 0;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}
var n = 100;
var arr = [];
for (var i = 0; i <= n; i++) {
  if (primeNo_checked(i)) {
    arr.push(i);
  }
}
console.log(arr);

// CHECKED PRIME IN AN ARRAY
var arr = [3,5,7,11,13,19,23,29,17,12,15,14,27]
function primeNo_checked(num){
let count = 0;
for(let i = 2; i<num; i++){
        if(num%i==0){
                count++
        }
}
if(count==0){
        return true
}
else{
        return false
}

}

let countPrime_no = 0;
for(let i = 0; i<arr.length; i++){
        let res = primeNo_checked(arr[i])
        if(res==true){
                countPrime_no++
        }
}
console.log(countPrime_no)