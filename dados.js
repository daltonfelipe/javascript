// comentario de uma linha
/*
    Comentario
    de
    varias
    linhas
*/ 

// Estruturas de dados
// definicao de variaveis


// Strings
var nome = "Dalton Felipe"
var sobrenome = "Silva Varão"

// concatenação de strings
var nomeCompleto = nome + " " + sobrenome;

// pega pedacos 'fatias da string'
nome.slice(0,6);
// retorna o tamanho da string;
nome.length;
// transforma em caixa alta;
nome.toLowerCase();


// Inteiros
var idade = 20;

// retorna o valor float;
idade.toFixed(2)

// transforma em string
idade.toString();

// Floats
var altura = 1.87;
var peso = 85.5;

// definicao de constantes
// nao permite mudanca 
const pi = 3.1415;

// operacoes com variaveis
var imc = peso/(altura*altura);

// printa o valor da variavel na tela de maneiras diferentes
console.log(nome);
console.log("O valor do imc e: " + imc.toString());
console.log(`O valor do imc e: ${imc}`);

// Booleanos
var maiorDeIdade = false;
var vivo = true;

// Listas
var pesos = [51.50, 75.45, 53.76, 65.42, 56.18];

// adiciona elemento
pesos.push(48.98);
// verifica posicao do elemento
pesos.indexOf(48.98);
// remove o elemento apartir da posicao
pesos.splice(pesos.indexOf(48.98));

