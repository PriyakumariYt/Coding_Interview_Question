const TriangleOrNot = (a,b,c)=>{
    if(a===b && b===c){
        return "equilateral"
    }
  else if (a===b || b===c || c===a) {
        return "isosceles"
    } else {
        return "scalene"
    }
}
console.log(TriangleOrNot(2,3,5))  //scalene
console.log(TriangleOrNot(2,2,5)) // isosceles
console.log(TriangleOrNot(3,3,3)) // equilateral