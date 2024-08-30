/* 1.Verificar se um número é par ou ímpar */
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log("O número é par");
  } else {
    console.log("O número é ímpar");
  }
}
console.log("1.Verificar se um número é par ou ímpar:");
verificarParOuImpar(4);
console.log("------------------------------------------------------------");

/* 2.Classificar idade em categorias */
function classificarIdade(idade) {
  if (idade <= 12) {
    console.log("Criança");
  } else if (idade <= 17) {
    console.log("Adolescente");
  } else if (idade <= 64) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}
console.log("2.Classificar idade em categorias:");
classificarIdade(25);
console.log("------------------------------------------------------------");

/* 3.Classificar nota como Aprovado, Recuperação ou Reprovado */
function classificarNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

console.log("3.Classificar nota como Aprovado, Recuperação ou Reprovado:");
classificarNota(6);
console.log("------------------------------------------------------------");

/* 4.Menu interativo com switch-case */
function menuInterativo(opcao) {
  switch (opcao) {
    case 1:
      console.log("Opção 1 selecionada");
      break;
    case 2:
      console.log("Opção 2 selecionada");
      break;
    case 3:
      console.log("Opção 3 selecionada");
      break;
    default:
      console.log("Opção inválida");
  }
}


console.log("4.Menu interativo com switch-case:");
menuInterativo(2);
console.log("------------------------------------------------------------");

/* 5.Calcular IMC e determinar a categoria de peso */
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  if (imc < 18.5) {
    console.log("Baixo peso");
  } else if (imc < 24.9) {
    console.log("Peso normal");
  } else if (imc < 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }
}

console.log("5.Calcular IMC e determinar a categoria de peso:");
calcularIMC(70, 1.75);
console.log("------------------------------------------------------------");

/* 6.Verificar tipo de triângulo */
function verificarTriangulo(A, B, C) {
  if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
      console.log("Triângulo Equilátero");
    } else if (A === B || B === C || A === C) {
      console.log("Triângulo Isósceles");
    } else {
      console.log("Triângulo Escaleno");
    }
  } else {
    console.log("Não é um triângulo");
  }
}

console.log("6.Verificar tipo de triângulo:");
verificarTriangulo(3, 4, 5);
console.log("------------------------------------------------------------");

/* 7.Calcular o valor total da compra de maçãs */
function calcularValorMacas(quantidade) {
  let preco;
  if (quantidade < 12) {
    preco = 0.3;
  } else {
    preco = 0.25;
  }
  const total = quantidade * preco;
  console.log(`Valor total: R$ ${total.toFixed(2)}`);
}

console.log("7.Calcular o valor total da compra de maçãs:");
calcularValorMacas(10);
console.log("------------------------------------------------------------");

/* 8.Escrever dois valores em ordem crescente */
function ordenarValores(valor1, valor2) {
  if (valor1 > valor2) {
    console.log(`[${valor2}, ${valor1}]`);
  } else {
    console.log(`[${valor1}, ${valor2}]`);
  }
}

console.log("8.Escrever dois valores em ordem crescente:");
ordenarValores(7, 3);
console.log("------------------------------------------------------------");

/* 9. Exibir contagem regressiva de 10 até 1 */
console.log("9.Exibir contagem regressiva de 10 até 1:");
let numeros = [];
for (let i = 10; i > 0; i--) {
  numeros.push(i);
}
console.log(numeros);
console.log("------------------------------------------------------------");

/* 10.Escrever um número na tela 10 vezes */
function escreverNumero10Vezes(numero) {
  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
}
console.log("10.Escrever um número na tela 10 vezes:");
escreverNumero10Vezes(7);
console.log("------------------------------------------------------------");

/* 11.Calcular a soma de 5 números fornecidos */
const prompt11 = require("prompt-sync")();

function calcularSoma() {
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    const entrada = prompt11("Digite um número: ");
    const numero = parseFloat(entrada);
    if (!isNaN(numero)) {
      soma += numero;
    } else {
      console.log("Entrada inválida. Por favor, digite um número.");
      i--; // Decrementa o contador para garantir que 5 números válidos sejam somados.
    }
  }

  console.log("Soma total:", soma);
  console.log("Programa encerrado.");
  console.log("------------------------------------------------------------");
}

console.log("11.Calcular a soma de 5 números fornecidos:");
calcularSoma();
console.log("");

/* 12. Exibir a tabuada de um número */
const prompt12 = require("prompt-sync")();

function exibirTabuada() {
  const entrada = prompt12("Digite um número para ver sua tabuada: ");
  const numero = parseInt(entrada);

  if (!isNaN(numero)) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  } else {
    console.log("Por favor, digite um número válido.");
    exibirTabuada(); // Pergunta novamente se a entrada for inválida
  }

  console.log("Programa encerrado.");
  console.log("------------------------------------------------------------");
}

console.log("12. Exibir a tabuada de um número");
exibirTabuada();

/* 13. Calcular a média aritmética até que o usuário digite 0: */
const prompt13 = require("prompt-sync")();

function calcularMedia() {
  let soma = 0;
  let count = 0;

  while (true) {
    const entrada = prompt13("Digite um número (0 para sair): ");
    const numero = parseFloat(entrada);

    if (numero === 0) {
      break; // Sai do loop quando o usuário digitar 0
    }

    if (!isNaN(numero)) {
      soma += numero;
      count++;
    } else {
      console.log("Por favor, digite um número válido.");
    }
  }

  const media = count > 0 ? soma / count : 0;
  console.log("Média aritmética:", media.toFixed(2));
  console.log("Programa encerrado.");
  console.log("------------------------------------------------------------");
}

calcularMedia();

/* 14. Calcular o fatorial de um número: */
const prompt14 = require("prompt-sync")();

function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`Fatorial de ${numero} é ${fatorial}`);
}

const entrada = prompt14("Digite um número para calcular o fatorial: ");
const numero = parseInt(entrada);

if (!isNaN(numero) && numero >= 0) {
  calcularFatorial(numero);
} else {
  console.log("Por favor, digite um número inteiro não negativo.");
}

console.log("Programa encerrado.");
console.log("------------------------------------------------------------");

/* 15. Gerar e imprimir os primeiros 10 números da sequência de Fibonacci: */
function fibonacci() {
    let n1 = 0, n2 = 1, nextTerm;
    let soma = n1 + n2; // Inicializa a soma com os dois primeiros termos

    console.log(n1); // Primeiro termo
    console.log(n2); // Segundo termo

    for (let i = 2; i < 10; i++) {
        nextTerm = n1 + n2;
        console.log(nextTerm);
        soma += nextTerm; // Adiciona o termo atual à soma
        n1 = n2;
        n2 = nextTerm;
    }

    console.log("Soma dos 10 primeiros termos de Fibonacci:", soma);
}

fibonacci();

