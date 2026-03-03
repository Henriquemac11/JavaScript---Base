//Criando uma Matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Acessando os valores
console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8

//Pecorrendo uma matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

//Alterando valor
matriz[0][1] = 20;

