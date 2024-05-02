const isEmptyObject = (obj)=>{
    // return Object.keys(obj).length ===0;
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        return `its not empty;`
    }
}
return `its empty`
}
console.log(isEmptyObject({name: "priya"}))
console.log(isEmptyObject({}))
console.log(isEmptyObject({keyNull: null}))
console.log(isEmptyObject({keyUndefined: undefined}))
