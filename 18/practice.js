var fruits = ["Apple", 'Banana', "Orange"];
var indexOfBanana = fruits.indexOf("Banana");
console.log(indexOfBanana);
fruits[1] = 'Mango';
fruits.pop();
fruits.push("Whater malon");
console.log(fruits);



if(num1 > num2){
    if(num1 > num3){
        console.log(num1)
    }
    else{
        console.log(num3)
    }
}
else{
    if(num2 > num3){
        console.log(num2)
    }
    else{
        console.log(num3)
    }
}


// pro 2 .. i can creyat a rusylt defiend  calklater

// const myGrad = 770;

// if(myGrad > 100){
//     console.log('Error you creyat misstake')
// }
// else if(myGrad >= 80){
//     console.log("You have got... A+..");
// }
// else if(myGrad > 59){
//     console.log("You have got... B ..");
// }
// else if(myGrad >= 50){
//     console.log("You have got... C ..");
// }
// else if(myGrad >= 40){
//     console.log("You have got... D ..");
// }
// else if(myGrad < 40 && myGrad >= 0){
//     console.log("Sad news for you You got... F ..");
// }

// else {
//     console.log('remove (-) and submit..')
// }








// pro 3 chak what is hte big number 

var num1 = 7000;
var num2 = 900;
var num3 = 9000;

if( num1 > num2){
    if( num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else if(num1 < num2){
    if(num3 < num2){
        console.log(num2)
    }
    else{
        console.log(num3)
    }
} 

// pro 4
var number1 = 0;
var number2 = 8;
var number3 = 5;

if(number1 == number2 || number2 == number3 || number3 == number1){
    if(number1 == number2 && number2 == number3 ){
        console.log("Itss somobaho trebos")
    }
   else{
    console.log("Its somodebaho trebos");
   }
}
else {
    console.log("Its asomobaho trebos")
}
