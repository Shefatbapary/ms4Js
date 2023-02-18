/// this a object
var myPc = {
    brand :" hp",
    price : 50000,
    color :"black",
    prosasor: 33
}

myPc.color ="silver";
console.log(myPc);
// console.log(myPc.price);

// 20.7 shopingcart

var shoppingcart ={
    books: 3,
    keyboard: 2, 
    pen: 24,
    earrphone: 2
}
// when you know property name, use dot notation 
var pencount = shoppingcart.pen;
// alternative sistem
var pencount2 = shoppingcart["pen"];
var propertes = Object.keys(shoppingcart)
var propertesValus = Object.values(shoppingcart);

shoppingcart.books = 99;
shoppingcart['books']= 66;
var properteName = 'books';
var properteValus = shoppingcart[properteName]


console.log(shoppingcart, pencount, pencount2);
console.log(propertes);
console.log(propertesValus);

console.log(properteName, properteValus);

