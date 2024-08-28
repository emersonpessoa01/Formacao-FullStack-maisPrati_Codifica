/* 1 - Imprima a sequência de Fibonacci até o 10º termo */
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Sequência de Fibonacci:");
let lista = [];
for (let i = 1; i <= 10; i++) {
  lista.push(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
console.log("1 - Imprima a sequência de Fibonacci até o 10º termo");
console.log(`R: ${lista}`);
console.log("-----------------------------------------------------");

/* 2 - Verifique se um número é primo */

function isPrime(num) {
  if (num <= 1) {
    return "falso";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return "verdadeiro";
}
console.log("2 - Verifique se um número é primo ");
console.log("R: 29 é primo?", isPrime(5));
console.log("-----------------------------------------------------");

/* 3 - Imprima um triângulo de números */

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line);
  }
}
console.log("3 - Imprima um triângulo de números");
printTriangle(5);
console.log("-----------------------------------------------------");

/* 4 - Calcule o fatorial de um número */
let number = 5;
let factorial = 1;

while (number > 0) {
  factorial *= number;
  number--;
}
console.log("4 - Calcule o fatorial de um número");
console.log(`R: Fatorial de 5 é: ${factorial}`);
console.log("-----------------------------------------------------");
/* 5 - Inverta os dígitos de um número */

let numToReverse = 1234;
let reversed = 0;

while (numToReverse !== 0) {
  let digit = numToReverse % 10;
  reversed = reversed * 10 + digit;
  numToReverse = Math.floor(numToReverse / 10);
}
console.log("5 - Inverta os dígitos de um número");
console.log(`R: Número invertido de 1234 é: ${reversed}`);

console.log("-----------------------------------------------------");

/* 6 - Verifique se um número é um palíndromo */

let numPalindrome = 121;
let originalNum = numPalindrome;
let reversedNum = 0;

while (numPalindrome !== 0) {
  let digit = numPalindrome % 10;
  reversedNum = reversedNum * 10 + digit;
  numPalindrome = Math.floor(numPalindrome / 10);
}

console.log("6 - Verifique se um número 121 é um palíndromo");
console.log(
  originalNum === reversedNum ? "R: É palíndromo" : "R: Não é palíndromo"
);

console.log("-----------------------------------------------------");

/* 7 - Conte o número de dígitos de um número */

let numToCount = 12345;
let digitCount = 0;

do {
  numToCount = Math.floor(numToCount / 10);
  digitCount++;
} while (numToCount > 0);

console.log("7 - Conte o número de dígitos dos números [12345]");
console.log(`R: Número de dígitos: ${digitCount}`);
console.log("-----------------------------------------------------");
/* 8 - Calcule a soma dos dígitos de um número */
let numToSum = 1234;
let sum = 0;

do {
  sum += numToSum % 10;
  numToSum = Math.floor(numToSum / 10);
} while (numToSum > 0);
console.log("8 - Calcule a soma dos dígitos de um número 1234");
console.log(`R: Soma dos dígitos: ${sum}`);
console.log("-----------------------------------------------------");

/* 9 - Imprima um padrão de estrela decrescente */
console.log("9 - Imprima um padrão de estrela decrescente ");
let stars = 5;

do {
  let output = "";
  for (let i = 0; i < stars; i++) {
    output += "*";
  }
  console.log(output);
  stars--;
} while (stars > 0);
console.log("-----------------------------------------------------");
/* 10 - Encontre o maior divisor comum (MDC) de dois números */
console.log("10 - Encontre o maior divisor comum (MDC) de dois números(56 e 98)")
let a = 56,
  b = 98;

do {
  if (a > b) {
    a -= b;
  } else {
    b -= a;
  }
} while (a !== b);

console.log(`MDC: ${a}`);
