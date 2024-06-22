const printPattern = (n) => {
  let num = 1;
  for (let i = 0; i < n; i++) {
    let res = " ".repeat(i * 2);
    for (let j = i; j < n; j++) {
      res += num++ + " "; 
    }
    console.log(res); 
  }
}

printPattern(3);
