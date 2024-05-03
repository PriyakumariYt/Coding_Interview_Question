const obj = {
    name: "Priya",
    age: 22,
    country: "India"
};

const ObjectInArray = (obj) => {
    let store = Object.entries(obj);
    let flat = store.flat();
    let data = Object.fromEntries(store);
    console.log(data);
   
};

ObjectInArray(obj);

