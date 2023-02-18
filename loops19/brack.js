for (var i = 0; i <= 20; i++) {
    if (i > 5) {
        break;
    }
    console.log(i)
}
console.log("its other")

// rostgiven
var RostGiven = 0;
while (RostGiven < 10) {
    RostGiven++;
    if (RostGiven > 4) {
        break;
    }
    console.log(RostGiven)
}

console.log("its other dst")
// string
var gfNames = ['kona', 'tamana', 'santa', 'reme', 'anta', 'sakela']
var i = 0;
while (i < gfNames.length) {
    var gfName = gfNames[i];
    i++;
    if(gfName== "santa"){
        break;
    }
    console.log(gfName)
}
var gfages = [33, 22, 10, 14, 13, 35, 66, 37, 89, 90 , 15, 13, 66, 5, 44, 41]
var i = 0;
while (i < gfages.length) {
    i++;
    var gfage = gfages[i];
    if(gfage > 50){
        continue;
    }
    console.log(gfage)
}