let isAdult = true;
let car = true;
let canDrive = isAdult && car;
console.log("Pode dirigir?? " + canDrive);

let beer = false;

let canDrink = isAdult && beer;
console.log("Pode beber?? " + canDrink);


let rain = true;
let umbrella = false;
let wet;

if (rain && umbrella) {
    wet = false;
} if (rain == false) {
    wet = false;
} else {
    wet = true;

}
console.log("Está molhado? " + wet);

let student = false;

let retired = true;

let discount = student || retired;

console.log("Voce ganhou desconto? " + discount);

let greenEyes = true;

let blueEyes = false;

let lightColorEyes = greenEyes || blueEyes;

console.log("Seus olhos são claros? " + lightColorEyes);    
