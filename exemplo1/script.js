//INICIANDO OS TRABALHOS

document.getElementById('mostrar-variaveis').addEventListener('click', function() {

let idade = 25;
let nome = "ana";
let casado = true;

document.getElementById('variavel-simples').innerText = `simples: Nome:${nome}, idade:${idade}, casado:${casado}`;

let frutas = ["maçã", "banana", "laranja"];
let pessoa = {
    nome: "Carlos",
    idade: 30,
    casado : false
};

document.getElementById('variavel-composta').innerText = `Compostas: Frutas:${frutas.join(', ')}, Pessoa: Nome:${pessoa.nome}, Idade: ${pessoa.idade}, Casado: ${pessoa.casado}`;

let a = 10;
let b = 20;
let c = 30;

let variaveis = [a, b, c];
let chave = "dinamica";
let objetoDinamico = {
    dinamica: "Este é o valor dinâmico"
};

document.getElementById('variavel-de-variaveis').innerText = `Variáveis de Variáveis: Array: ${variaveis.join(', ')}, Objeto Dinâmico: ${objetoDinamico[chave]}`;

});