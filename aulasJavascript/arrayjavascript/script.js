let cellphoneBrands = ["Samsung","Motorola","Iphone"];

//Adiciona dados no final do array
cellphoneBrands.push ("Xiaomi"); 

//Adiciona dados no começo do array
cellphoneBrands.unshift ("Huawei");

//debugger : mostra passo a passo a execução do código
 
//Remover um item do final do array

cellphoneBrands.pop();

//Remover um item do começo do array

cellphoneBrands.shift();



console.log(cellphoneBrands);

//Acessar um item do array

console.log(cellphoneBrands[1]);

//Trocar o elemento do array

cellphoneBrands[1] = "Lg";

console.log(cellphoneBrands);
