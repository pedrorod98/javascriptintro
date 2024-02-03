function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log( num1 + ' é o maior número');
    } else if (num2 > num1) {
        console.log(num2 +' é o maior número');
    } else {
        console.log(num1 + ' é igual a '  + num2);
    }
 }
 
 findLargest(10, 5); // num1 is the largest number
 findLargest(5, 10); // num2 is the largest number
 findLargest(5, 5); // num1 is equal to num2