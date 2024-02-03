//Escreva uma função que converte o nome para iniciais.Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

//O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

//Outros exemplos:

//Maria Silva => M.S.

//Pedro Pedroso => P.P

//Estrutura da função:

function abbrevName(firstName, lastName) {
    const inicialfirstName = firstName.charAt(0);
    const iniciallastName = lastName.charAt(0);
    return `${inicialfirstName}.${iniciallastName}.`;

}


console.log(abbrevName('Pedro', 'Rodrigues'));
console.log(abbrevName('Ronan', 'Menezes'));
console.log(abbrevName('Brenda', 'Leal'));
console.log(abbrevName('Monica', 'Silveira'));


