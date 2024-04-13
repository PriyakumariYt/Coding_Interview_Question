const toSnakeCase = (str) => {
    str = str.trim().split(""); 
    str = str.map((curElem, index) => {
        if (index === 0) {
            return curElem.toLowerCase();
        } else {
            return curElem === curElem.toUpperCase() ? '_' + curElem.toLowerCase() : curElem;
        }
    });
    return str.join("");
}

console.log(toSnakeCase("helloWorld")); // Output: hello_world
// 2nd way
// const toSnakeCase = (str) => {
//     return str.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
// }

// console.log(toSnakeCase("helloWorld")); 


