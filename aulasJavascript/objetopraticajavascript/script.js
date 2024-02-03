let cellphone = {
    color: "Black",
    model: "Samsung",
    size: "Small",

};

console.log(cellphone.color); //acessa um valor

cellphone.weightInGrams = 200; 

cellphone.color = "White";
delete cellphone.color;

console.log(cellphone);