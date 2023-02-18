// this is array its almost same of var
var gfage = [ 12, 34, 68, 16, 8];
var gfName = [ "kona", 'tamana', 'anta'];
console.log(gfName);
console.log(gfage.indexOf(16));
gfage[1] /=5;
console.log(gfage);
// push pop
gfName.push("reme"); 
gfName.unshift("Anta my super crash");
// gfName.splice("Anta my super crash");
var popItemTest =gfName.pop("reme"); 
console.log(gfName);
console.log(popItemTest);



// condition

var govmentJob = true;
var salary = 40000;
var cars = 3;

if(govmentJob == true && salary >= 40000 && cars > 2){
    console.log("colo Beya Kora Fale")
}
else{
    console.log("You mesken tor copala beya ni")
}


// or or or o ro or o ro    rro ro r
var govmentJob = false;
var salary = 10000;
var cars = 3;

if(govmentJob == true || salary >= 40000 || cars > 2){
    console.log("colo Beya Kora Fale")
}
else{
    console.log("You mesken tor copala beya ni")
}