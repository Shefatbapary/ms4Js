/* var i = 1;
while(i <= 9){
    console.log(i, "asaka amar mon balo nay")
    i++;
}

for( var i = 1; i <= 9; i++){
    console.log('aska amar mon balo nai ', i)
}


var i = 0;
var gfs = ["anta", 'remi', 'santa', 'kona', 'juna', "jora"];
while( i < gfs.length){
    console.log(gfs[i]);
    console.log(gfs.indexOf(gfs[i]));
    i++;
}

var gfs = ["anta", 'remi', 'santa', 'kona', 'juna', "jora"];

for(var i = 0; i < gfs.length; i++){
    console.log(gfs[i]);
    console.log(gfs.indexOf(gfs[i]))
}


for (var i = 58; i <= 98; i++){
    console.log(i)
}

var i = 412;
while(i <= 456){
    console.log(i)
    i+=2;
} 
for(var i = 581; i <= 623; i +=2){
    console.log(i);
}
var icanlearnonthidms = ["var", 'array', "loops", 'conditions']
for (var i = 0; i < icanlearnonthidms.length; i++){
    console.log(icanlearnonthidms[i]);
}
*/
var i = 30;
while(i < 86){
    if(i > 34){
        break;
    }
    console.log(i);
    i++;
}
var booksPrice = [30, 800, 80,50, 1000, 10, 119, 70 , 30, 50 ,50000]
for( var i = 0; i < booksPrice.length; i++){
    var bookPrice = booksPrice[i];
    if(bookPrice > 100){
        continue;
    }
    console.log(bookPrice, i);
}

