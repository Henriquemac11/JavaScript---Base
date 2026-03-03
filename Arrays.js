//Arrays

//Em vez de criar várias variáveis:
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

//voce faz:
let notas = [7, 8, 9];

//Indice
let frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas[0]); // Maçã

//Tamanho do Array 
let numeros = [10, 20, 30];
console.log(numeros.length); // 3

//Adicionar Elementos
numeros.push(40); // Push adiciona no final

numeros.unshift(5); // unshift adiciona no inicio

//Remover elementos
numeros.pop(); //Remove do final

numeros.shift(); //Remove do comeco

//Percorrendo Array com for
let nomes = ["Ana", "Carlos", "Pedro"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
