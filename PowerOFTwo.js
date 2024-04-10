const PowerOfTwo =(num)=>{
    let res = false
    for(let i = 1; i<num;i++){
if(2**i==num){
    res= true
}
    }
    return res
}
console.log(PowerOfTwo(8))

// 2ND way
function checkPower(num) {
    var res = 0;
    var ans = "yes";
    for (let i = 0; i < num; i++) {
      if (num != 1) {
        res = num / 2;
        if (res != 1) {
          num = res;
          if (res % 2 != 0) {
            ans = "no";
            break;
          }
        }
      }
    }
    console.log(ans);
  }
  checkPower(8);