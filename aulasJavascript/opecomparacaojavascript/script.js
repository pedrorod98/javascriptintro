

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

let luckyNumber = getRandomInt(1, 100);
let myNumber = getRandomInt(1,100);

console.log("Seu número é" ,myNumber);
console.log("O numero da sorte é " , luckyNumber);

console.log(luckyNumber == myNumber);


let userAge = 18;
let limitAge = 18;

console.log(userAge <= limitAge);