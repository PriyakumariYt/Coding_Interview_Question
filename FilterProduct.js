var amazon = [
      { name: "speaker", price: 4500, rating: 4 },
      { name: "iphone", price: 55000, rating: 5 },
      { name: "makeup", price: 3300, rating: 4 },
      { name: "ref", price: 5600, rating: 4 },
      { name: "earbuds", price: 8900, rating: 3 },
      { name: "tv", price: 12300, rating: 4 },
    ];
    var product = { name: "mixer", price: 9000, rating: 5};
    amazon.push(product);
    // console.log(amazon);
    // find all the prouct name
    // for (let i = 0; i < amazon.length; i++) {
    //   console.log(amazon[i].name);
    //   console.log(amazon[i].name, amazon[i].price);
    //   console.log(amazon[i].name, amazon[i].rating);
    //   console.log(amazon[i].name, amazon[i].price, amazon[i].rating);
    // }
    // find all the product name whose rating is 4
    for (let i = 0; i < amazon.length; i++) {
    if(amazon[i].rating===4){
      console.log(amazon[i].name, amazon[i].price)
    }
    }
    // find all the product price whose price is greater then 5000
//  for (let i = 0; i < amazon.length; i++) {
//    if(amazon[i].price>5000){
//     console.log(amazon[i].name, amazon[i].price)
//   }
//   }