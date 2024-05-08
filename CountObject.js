
let arr = [1,2,2,7,8,8,7,9,8,3,4]
let num = {}
for(let i = 0; i<arr.length; i++){
  var noStore = arr[i]
  if(num[noStore]===undefined){
    num[noStore] = 1
  }
  else{
    num[noStore] = num[noStore]+ 1
  }
}
for(let l in num){
  console.log(l," :", num[l])
}
// 2nd way
const array = [1,2,2,7,8,8,7,9,9,9,3,4]
const objectCount = (array) =>{
    let count = {}
    for(let element of array){
      count[element] = (count[element] ||0) + 1
    }
    return count
}

console.log(objectCount(array))

var str = "amarjeet"
var diary = {}
for(let i = 0; i<str.length; i++){
  var char = str[i]

  if(diary[char]==undefined){
    diary[char]= 1
  }else{
    diary[char]= diary[char]+ 1
  }
}
for(var key in diary){
  console.log(key, " :", diary[key])
}
