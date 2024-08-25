/* 1 - Verifique se um número é positivo, negativo ou zero */
const prompt1 = require("prompt-sync")();

const numero = parseFloat(prompt1("Digite um número: "));

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

/* 2 - Verifique se um ano é bissexto */
const prompt2 = require("prompt-sync")();

const ano = parseInt(prompt2("Digite um ano: "));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`${ano} é um ano bissexto.`);
} else {
  console.log(`${ano} não é um ano bissexto.`);
}

/* 3 - Calcule a média de três números e determine o conceito */
const prompt3 = require("prompt-sync")();

const nota1 = parseFloat(prompt3("Digite a primeira nota: "));
const nota2 = parseFloat(prompt3("Digite a segunda nota: "));
const nota3 = parseFloat(prompt3("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;
let conceito;

if (media >= 9) {
  conceito = "A";
} else if (media >= 8) {
  conceito = "B";
} else if (media >= 7) {
  conceito = "C";
} else if (media >= 6) {
  conceito = "D";
} else if (media >= 5) {
  conceito = "E";
} else {
  conceito = "F";
}

console.log(`A média é ${media.toFixed(2)} e o conceito é ${conceito}.`);

/* 4 - Verifique se um número é par ou ímpar */
const prompt4 = require("prompt-sync")();

const numero4 = parseInt(prompt4("Digite um número: "));

if (numero4 % 2 === 0) {
  console.log(`${numero4} é par.`);
} else {
  console.log(`${numero4} é ímpar.`);
}
/* 5 - Verifique a categoria de um nadador */
const prompt5 = require("prompt-sync")();

const idade = parseInt(prompt5("Digite a idade do nadador: "));

if (idade >= 5 && idade <= 7) {
  console.log("Categoria: Infantil A");
} else if (idade >= 8 && idade <= 10) {
  console.log("Categoria: Infantil B");
} else if (idade >= 11 && idade <= 13) {
  console.log("Categoria: Juvenil A");
} else if (idade >= 14 && idade <= 17) {
  console.log("Categoria: Juvenil B");
} else if (idade >= 18) {
  console.log("Categoria: Adulto");
} else {
  console.log("Idade fora das categorias.");
}

/* 6 - Verifique o dia da semana */
const prompt6 = require("prompt-sync")();

const dia = parseInt(prompt6("Digite um número de 1 a 7: "));

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido.");
}

/* 7 - Calcule o valor de uma expressão matemática simples */
const prompt7 = require('prompt-sync')();

const numero1 = parseFloat(prompt7('Digite o primeiro número: '));
const numero2 = parseFloat(prompt7('Digite o segundo número: '));
const operador = prompt7('Digite o operador (+, -, *, /): ');

let resultado;

switch (operador) {
  case '+':
    resultado = numero1 + numero2;
    break;
  case '-':
    resultado = numero1 - numero2;
    break;
  case '*':
    resultado = numero1 * numero2;
    break;
  case '/':
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log('Erro: Divisão por zero.');
      return;
    }
    break;
  default:
    console.log('Operador inválido.');
    return;
}

console.log(`O resultado é: ${resultado}`);

/* 8 - Verifique a estação do ano */
const prompt8 = require('prompt-sync')();

const estacao = parseInt(prompt8('Digite um número de 1 a 4: '));

switch (estacao) {
  case 1:
    console.log('Primavera');
    break;
  case 2:
    console.log('Verão');
    break;
  case 3:
    console.log('Outono');
    break;
  case 4:
    console.log('Inverno');
    break;
  default:
    console.log('Número inválido.');
}
/* 9 - Verifique a faixa etária de uma pessoa */
const prompt9 = require('prompt-sync')();

const idade9 = parseInt(prompt9('Digite a idade: '));
let faixaEtaria;

if (idade9 >= 0 && idade9 <= 12) {
  faixaEtaria = 'Criança';
} else if (idade9 >= 13 && idade9 <= 17) {
  faixaEtaria = 'Adolescente';
} else if (idade9 >= 18 && idade9 <= 59) {
  faixaEtaria = 'Adulto';
} else if (idade9 >= 60) {
  faixaEtaria = 'Idoso';
} else {
  console.log('Idade inválida.');
  return;
}

switch (faixaEtaria) {
  case 'Criança':
    console.log('Você está na faixa etária: Criança.');
    break;
  case 'Adolescente':
    console.log('Você está na faixa etária: Adolescente.');
    break;
  case 'Adulto':
    console.log('Você está na faixa etária: Adulto.');
    break;
  case 'Idoso':
    console.log('Você está na faixa etária: Idoso.');
    break;
  default:
    console.log('Faixa etária desconhecida.');
}

/* 10 - Calcule o IMC e determine a categoria */
const prompt10 = require('prompt-sync')();

const peso = parseFloat(prompt10('Digite o peso (kg): '));
const altura = parseFloat(prompt10('Digite a altura (m): '));

const imc = peso / (altura * altura);
let categoria;

if (imc < 18.5) {
  categoria = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
  categoria = 'Peso normal';
} else if (imc >= 25 && imc <= 29.9) {
  categoria = 'Sobrepeso';
} else if (imc >= 30 && imc <= 34.9) {
  categoria = 'Obesidade grau I';
} else if (imc >= 35 && imc <= 39.9) {
  categoria = 'Obesidade grau II';
} else {
  categoria = 'Obesidade grau III';
}

console.log(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}.`);
