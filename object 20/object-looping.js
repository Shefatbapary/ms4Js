var shoppingcart ={
    books: 3,
    keyboard: 2, 
    pen: 24,
    earrphone: 2,
    sunglass : 3,
    shoes : 5,
    bag : 4, 
    coklat : 12,
}
const keys = Object.keys(shoppingcart);
const value = Object.values(shoppingcart);
// for(var i = 0;i < keys.length; i+= 1){
//     // console.log(keys[i]);
//     var properteName = keys[i];
//     var propertesValus = value[i];
//     console.log(properteName, propertesValus);
// }
// for in loop 
for (var properteName in shoppingcart){
    var value2 = shoppingcart[properteName];
    console.log(properteName, value2);
}

// console.log(keys[2]);
// console.log(keys.length);