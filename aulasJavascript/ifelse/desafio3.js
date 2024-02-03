function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log( num1 + ' é o maior número');
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2 +' é o maior número');
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3 +' é o maior número');
    } else if(num1 == num2 && num3 < num1){
        console.log(num1 +' e '+ num2 +' são maiores que ' + num3);
    } else if(num3 == num2 && num1 < num3){
        console.log(num3 +' e '+ num2 +' são maiores que ' + num1);
    } else if(num3 == num1 && num2 < num3){
        console.log(num3 +' e '+ num1 +' são maiores que ' + num2);    
    }else{
        console.log('São todos iguais');
 }}
 
 findLargest(11, 5, 4); // num1 is the largest number
 findLargest(5, 13 ,2); // num2 is the largest number
 findLargest(5, 5, 14); // num1 is equal to num2
 findLargest(5, 5, 3); // num1 is equal to num2
 findLargest(5, 5, 5); // num1 is equal to num2
 findLargest(3, 6, 6); // num1 is equal to num2
 findLargest(8, 4, 8); // num1 is equal to num2

 