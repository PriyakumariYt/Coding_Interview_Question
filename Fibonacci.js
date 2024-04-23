const Fibonacci = (num)=>{
    if(num <=1){
        return num
    }else{
return Fibonacci(num-1) + Fibonacci(num-2)
    }
}
console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))