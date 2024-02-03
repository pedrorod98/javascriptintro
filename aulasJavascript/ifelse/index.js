let minimumAge = 18;
let userAge = 20;

if (userAge >= minimumAge) {
    console.log('Pode dirigir');
    
} else {
    console.log('Não pode dirigir');
    
}

let user = "PedroLucas";

let password = 1234;

if (user == "PedroLucas" && password == 1234) {
    console.log("Login efetuado com sucesso");
    
} else {
    console.log("Senha incorreto");
    
}

let cpf = "123.456.789-01"

console.log(cpf.length);

if (cpf.length == 14) { //cpf.length conta quantidade de letras
    console.log('Cpf Correto');
    
} else {
    console.log('Cpf incorreto');
    
}
