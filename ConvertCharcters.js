const ConvertChar = (str) => {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < upper.length; j++) {
            if (str[i] === upper[j]) {
                ans += lower[j];
                break; 
            } else if (str[i] === lower[j]) {
                ans += upper[j];
                break; 
            }
        }
    }
    return ans;
};

console.log(ConvertChar("PriYaKuMaRi"));
