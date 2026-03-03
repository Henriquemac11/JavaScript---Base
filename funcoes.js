//Criando uma funcao
function saudacao() {
    console.log("Olá!");
}
//pra executar
saudacao();

//funcao com paramentros
function saudacao(nome) {
    console.log("Olá, " + nome);
}

saudacao("Henrique");

//funcao com retorno
function soma(a, b) {
    return a + b;
}

let resultado = soma(5, 3);
console.log(resultado); // 8

//funcao com repeticao
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));
