// 1. Verificador de Maioridade Crie um programa que peça ao usuário sua idade O sistema deve informar se ele é maior de idade ou menor de idade.

let idade = prompt("QUal a sua idade?\n ");
if(idade >= 18){
    console.log("Acesso Liberado!  (Maior de idade)");
} else {
    console.log("Acesso Negado!    (Menor de idade)");
}


// 2. Par ou Ímpar Peça ao usuário que digite um número. O programa deve verificar se o número é par ou ímpar e mostrar o resultado.
let n1 = prompt("Qual o valor do número: ");
if ( n1 %2 == 0){
    console.log("Seu número é par!");
} else{
    console.log("Seu número é Ímpar!");
}

// 3. Calculadora Simples Peça ao usuário dois números e, em seguida, peça que ele escolha uma operação matemática (+, -, *, /). O sistema deve realizar a operação escolhida e exibir o resultado.
let n1 = parseInt(prompt("Qual o valor do primeiro número: "));
let n2 = parseInt(prompt("Qual o valor do segundo número: "));

let p = parseInt(prompt("Escolha o seu calculo:\n" +
    "1. + \n" +
    "2. - \n" +
    "3. x \n" +
    "4. / \n"));

switch (p){
    case 1:
        console.log("Resultado: " + (n1 + n2));
        break;
    case 2:
        console.log("Resultado: " + (n1 - n2));
        break;
    case 3:
        console.log("Resultado: " + (n1 * n2));
    case 4:
        console.log("Resultado: " + (n1 / n2));
        break;
        default:
        console.log("Opção Invalida!");
}

// 4 Tabuada Personalizada Peça ao usuário um número. O programa deve mostrar a tabuada desse número de 1 a 10.

