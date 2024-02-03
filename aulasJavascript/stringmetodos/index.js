let nome = "      Pedoro Lucas Silveira Rodrigues      ";

console.log(nome.length);//quantidade de caracteres

console.log(nome.charAt(4));//charAt diz qual caracter ta na posicao

console.log(nome.indexOf('o'));//diz qual posicao ta essa letra

console.log(nome.slice(1,3));//corta a string ate o determinada posiçao

console.log(nome.split(' '));//divide e torna em array determinando o local

console.log(nome.replace('o', 'i'));//troca o primeiro caracter(so primeiro) pelo segundo escolhido

console.log(nome.replaceAll('i', 'a'));//troca o primeiro caracter(todos) pelo segundo escolhido

console.log(nome.substr (1,3));// corta os caracteres a partir da posiçao escolhida e pode se definir um intervalo que os caracteres sejam cortados

console.log(nome.toUpperCase());//passa  tudo para maiusculo

console.log(nome.toLowerCase());//passa tudo para minusculo

console.log(nome.trim());//retira os espaços vazios no começo e fim da variavel