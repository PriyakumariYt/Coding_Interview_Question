let arr = [1,2,3,4,5]
const rotateLeft =()=>{
    let d = 4
    const n = arr.length;
  d = d % n; 
    console.log(d)
   
    let ans = arr.slice(d)
    // console.log(ans)
 let bag =   ans.concat(arr.slice(0,d))
//  console.log(bag)
 return bag
   
}
console.log(rotateLeft(arr))


 // In case d is greater than the array length
    // return arr.slice(d).concat(arr.slice(0, d));