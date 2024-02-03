let user = {
    username: "Pedro",
    email: "pedrorodrigues498@gmail.com",
    age: 20,

    login: function () {

        console.log("Login feito com Sucesso");
    },
    logout: function () {
        console.log("Desconectado");
    }

};

console.log(user.age);

user.phone = "37998286158",

    console.log(user);

user.username = "Lucas",

    console.log(user);

delete user.age;
console.log(user);