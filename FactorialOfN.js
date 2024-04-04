const Factorial = (n)=>{
let fact = 1
for(let i=1; i<=n;i++){
fact*= i
}
return fact
}
console.log(Factorial(5))
console.log(Factorial(6))
console.log(Factorial(0))
