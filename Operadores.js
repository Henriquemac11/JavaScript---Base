alert("Sistema de Cálculos Iniciado");

// Entrada de dados
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Operações aritméticas
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;

// Mostrando no console
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Potência:", potencia);

// Operações de atribuição
let contador = 10;

contador += 5;  // soma e atribui
contador -= 2;  // subtrai e atribui
contador *= 2;  // multiplica e atribui
contador /= 2;  // divide e atribui
contador %= 3;  // resto e atribui

// Incremento
contador++;

console.log("Valor final do contador:", contador);

// Mostrar tudo na tela
alert(
"Soma: " + soma +
"\nSubtração: " + subtracao +
"\nMultiplicação: " + multiplicacao +
"\nDivisão: " + divisao +
"\nResto: " + resto +
"\nPotência: " + potencia +
"\nContador final: " + contador
);
