// Factorial in Recursion
const FindFactorial = (num) =>{
    if(num===1){
        return 1     //base case
    }else{
        return num * FindFactorial(num-1)
    }
    
}

console.log(FindFactorial(5))

// 2nd way
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