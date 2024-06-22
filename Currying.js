function curryFun(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                 return a+b+c+d+e
                }
            }
        }

    }
}



// console.log(curryFun(5)(4)(3)(2)(1));
// FAT ARROW FUNCTION
const curryFunSum = (a)=>{
    return(b) =>{
        return(c)=>{
            return(d)=>{
                return(e)=>{
                    return a+b+c+d+e
                }
            }
        }
    }
}

let ans = curryFunSum(5)(4)(3)(2)(1);
console.log(ans);
// Short fat arrow function
const curryFunMult = (a)=>(b) =>(c)=>(d)=>(e)=> a*b*c*d*e
let res = curryFunMult(5)(4)(3)(2)(1);
console.log(res)