/* 1. Acessando Propriedades de Objetos

Crie um objeto carro com propriedades como marca,
 modelo, ano, e cor. Use for in para iterar sobre 
 as propriedades e exibir seus valores no console. 
*/
console.log("1. Acessando Propriedades de Objetos");
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: "2021",
  cor: "branco",
};

for (let propriedade in carro) {
  console.log(`${propriedade}:${carro[propriedade]}`);
}
console.log("---------------------------------------------------------");

/* 2. Verificando Propriedades

Crie um objeto livro com propriedades titulo, autor, 
anoPublicacao e genero. Verifique se a propriedade 
editora existe no objeto usando for in. Se não existir,
 adicione essa propriedade ao objeto.
*/
console.log("2.Verificando Propriedades");
const livro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes",
  anoPublicacao: 1605,
  genero: "Romance",
};

let temEditora = false;

for (let propriedade in livro) {
  if (propriedade === "editora") {
    temEditora = true;
  }
}
if (!temEditora) {
  livro.editora = "Desconhecida";
}

console.log(livro);
console.log("---------------------------------------------------------");

/* 3. Filtrando Propriedades de Objetos

Dado um objeto produto com várias propriedades, 
crie uma função que retorna um novo objeto 
contendo apenas as propriedades cujo valor 
seja maior que um valor específico. 
Use for in para filtrar as propriedades. */
console.log("3. Filtrando Propriedades de Objetos");
const produto = {
  nome: "Notebook",
  preco: 3000,
  garantia: 12,
  peso: 2,
  desconto: 500,
};

function filtrarPropriedades(objeto, valorMinimo) {
  const novoObjeto = {};
  for (let propriedade in objeto) {
    if (objeto[propriedade] > valorMinimo) {
      novoObjeto[propriedade] = objeto[propriedade];
    }
  }
  return novoObjeto;
}
console.log(
  `Propriedade do produto maior que 1000 é: ${JSON.stringify(
    filtrarPropriedades(produto, 1000)
  )}`
);

console.log("---------------------------------------------------------");
/* 4. Iterando Sobre Arrays de Objetos

Crie um array de objetos pessoas, onde cada 
objeto representa uma pessoa com nome, idade,
e cidade. Use for of para exibir as 
informações de cada pessoa no console. */

console.log("4.Iterando Sobre Arrays de Objetos");

const pessoas = [
  {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo",
  },
  {
    nome: "João",
    idade: 30,
    cidade: "Rio de Janeiro",
  },
  {
    nome: "Maria",
    idade: 28,
    cidade: "Belo Horizonte",
  },
];

for (let pessoa of pessoas) {
  console.log(
    `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
  );
}
console.log("---------------------------------------------------------");
/* 5.Calculando Valores em Arrays de Objetos

Crie um array de objetos alunos, cada um 
com propriedades nome, nota1, e nota2. 
Use for of para calcular a média das 
notas de cada aluno e exibir o nome 
do aluno junto com sua média. */

console.log("5.Calculando Valores em Arrays de Objetos");

const alunos = [
  { nome: "Ana", nota1: 8, nota2: 9 },
  { nome: "João", nota1: 7, nota2: 6 },
  { nome: "Maria", nota1: 9, nota2: 10 },
];

for (let aluno of alunos) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}

console.log("---------------------------------------------------------");
/* 6. Filtrando Arrays de Objetos

Crie um array de objetos funcionarios, 
onde cada objeto contém informações 
como nome, cargo, e salario. 
Use for of para filtrar e exibir 
apenas os funcionários cujo salário 
seja maior que um valor específico. */

console.log("6.Filtrando Arrays de Objetos");
const funcionarios = [
  { nome: "Ana", cargo: "Gerente", salario: 5000 },
  { nome: "João", cargo: "Desenvolvedor", salario: 3000 },
  { nome: "Maria", cargo: "Designer", salario: 4000 },
  { nome: "Pedro", cargo: "Analista", salario: 3500 },
  { nome: "Rafael", cargo: "Gerente", salario: 5500 },
];
const salarioMinimo = 5000;
for (let funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    console.log(
      `Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`
    );
  }
}

console.log("---------------------------------------------------------");
/* 7. Modificando Objetos em um Array

Crie um array de objetos produtos,
onde cada objeto tem nome, preco, 
e desconto. Use forEach para aplicar 
um desconto de 10% em todos os 
produtos e exibir o novo preço. */
console.log("7.Modificando Objetos em um Array");
const produtos = [
  { nome: "Notebook", preco: 2000, desconto: 0 },
  { nome: "Smartphone", preco: 1500, desconto: 0 },
  { nome: "Tablet", preco: 1000, desconto: 0 },
];
produtos.forEach(({ preco, nome }) => {
  preco = preco * 0.9;
  console.log(`Nome: ${nome}, Novo Preço: ${preco}`);
});
console.log("---------------------------------------------------------");
/* 8. Criando Novos Arrays a Partir de Objetos

Crie um array de objetos filmes, 
onde cada filme tem titulo, diretor, 
e anoLancamento. Use forEach para 
criar um novo array contendo apenas 
os títulos dos filmes. */
console.log("8.Criando Novos Arrays a Partir de Objetos");
const filmes = [
  { titulo: "Titanic", diretor: "Christopher Nolan", anoLancamento: 1997 },
  {
    titulo: "Star Wars: Episódio V",
    diretor: "George Lucas",
    anoLancamento: 1980,
  },
  { titulo: "Avatar", diretor: "Christopher Nolan", anoLancamento: 2009 },
  {
    titulo: "The Matrix",
    diretor: "The Wachowski Brothers",
    anoLancamento: 1999,
  },
  {
    titulo: "Eternal Sunshine of the Spotless Mind",
    diretor: "Kate Winslet",
    anoLancamento: 2004,
  },
];

const titulos = [];
filmes.forEach(({ titulo }) => {
  titulos.push(titulo);
});
console.log(titulos);
console.log("---------------------------------------------------------");
/* 9. Contabilizando Elementos com uma Condição

Crie um array de objetos clientes, 
cada um com propriedades nome, idade,
e cidade. Use forEach para contar 
quantos clientes têm mais de 30 anos. */

console.log("9. Contabilizando Elementos com uma Condição");

const clientes = [
  {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo",
  },
  {
    nome: "João",
    idade: 31,
    cidade: "Rio de Janeiro",
  },
  {
    nome: "Maria",
    idade: 30,
    cidade: "Belo Horizonte",
  },
  {
    nome: "Pedro",
    idade: 15,
    cidade: "Fortaleza",
  },
  {
    nome: "Rafael",
    idade: 45,
    cidade: "São Paulo",
  },
];
let count = 0;
clientes.forEach(({ idade }) => {
  if (idade > 30) {
    count++;
  }
});
console.log(`Clientes com mais de 30 anos: ${count}`);
console.log("---------------------------------------------------------");
/* 10. Criando Relatórios com Objetos e Arrays

Crie um array de objetos vendas, onde cada 
objeto tem produto, quantidade e valor. 
Use forEach para calcular o valor total 
de vendas de todos os produtos. */
console.log("10. Criando Relatórios com Objetos e Arrays");

const vendas = [
  { produto: "Notebook", quantidade: 10, valor: 2000 },
  { produto: "Smartphone", quantidade: 5, valor: 1500 },
  { produto: "Tablet", quantidade: 8, valor: 1000 },
  { produto: "Mouse", quantidade: 3, valor: 500 },
  { produto: "Teclado", quantidade: 2, valor: 800 },
];
let valorTotal = 0;
vendas.forEach(({ quantidade, valor }) => {
  valorTotal += quantidade * valor;
});

console.log(`Valor total de vendas: ${valorTotal}`);
console.log("---------------------------------------------------------");

/* 11. Agrupando Elementos com forEach

Crie um array de objetos pedidos, 
onde cada pedido tem cliente, produto, 
e quantidade. Use forEach para criar 
objeto que agrupa a quantidade total 
de produtos por cliente. */
console.log("11. Agrupando Elementos com forEach");
const pedidos = [
  { cliente: "Ana", produto: "Notebook", quantidade: 10 },
  { cliente: "João", produto: "Smartphone", quantidade: 5 },
  { cliente: "Maria", produto: "Tablet", quantidade: 8 },
  { cliente: "Pedro", produto: "Mouse", quantidade: 3 },
  { cliente: "Rafael", produto: "Teclado", quantidade: 2 },
  { cliente: "Ana", produto: "Mouse", quantidade: 5 },
  { cliente: "Rafael", produto: "Teclado", quantidade: 3 },
];
const totalPorCliente = {};

pedidos.forEach((pedido) => {
  if (!totalPorCliente[pedido.cliente]) {
    totalPorCliente[pedido.cliente] = 0;
  }
  totalPorCliente[pedido.cliente] += pedido.quantidade;
});
console.log(totalPorCliente);
console.log("---------------------------------------------------------");

/* 12. Atualizando um Array de Objetos

Crie um array de objetos estoque, 
onde cada objeto tem produto, 
quantidade e minimo. Use forEach 
para atualizar a quantidade dos 
produtos que estão abaixo do mínimo,
duplicando suas quantidades. */

console.log("12. Atualizando um Array de Objetos");
const estoque = [
  {
    produto: "Notebook",
    quantidade: 5,
    minimo: 10,
  },
  {
    produto: "Smartphone",
    quantidade: 3,
    minimo: 5,
  },
  {
    produto: "Tablet",
    quantidade: 8,
    minimo: 10,
  },
];
estoque.forEach(({ quantidade, minimo }, index) => {
  if (quantidade < minimo) {
    estoque[index].quantidade *= 2;
  }
});

console.log(estoque);
console.log("---------------------------------------------------------");

/* 13. Implementando um Carrinho de Compras
Crie um objeto carrinho com uma propriedade
itens, que é um array de objetos. 
Cada objeto dentro de itens deve representar
um produto no carrinho, com nome, quantidade,
e precoUnitario. Use forEach para calcular 
o valor total do carrinho. */
console.log("13. Implementando um Carrinho de Compras");
let carrinho = {
  itens: [
    { nome: "Notebook", quantidade: 1, precoUnitario: 2000 },
    { nome: "Smartphone", quantidade: 2, precoUnitario: 1500 },
    { nome: "Tablet", quantidade: 3, precoUnitario: 1000 },
  ],
};
let valorTotalCarrinho = 0;
carrinho.itens.forEach(({ quantidade, precoUnitario }) => {
  valorTotalCarrinho += quantidade * precoUnitario;
});
console.log(`O valor total do carrinho: R$ ${valorTotalCarrinho}`);
console.log("---------------------------------------------------------");

/* 14. Manipulando Objetos Complexos

Crie um objeto empresa com uma propriedade 
departamentos, que é um array de objetos. 
Cada departamento tem um nome e uma lista 
de funcionarios. Use for...in e for...of 
para iterar sobre os departamentos e seus 
funcionários, exibindo o nome de cada 
funcionário junto com o departamento 
ao qual pertence. */
console.log("14.Manipulando Objetos Complexos");
const empresa = {
  departamentos: [
    {
      nome: "Financeiro",
      funcionarios: ["João", "Maria", "Pedro"],
    },
    {
      nome: "Desenvolvimento",
      funcionarios: ["Ana", "Rafael", "Lucas"],
    },
  ],
};
for (let i in empresa.departamentos) {
  let departamento = empresa.departamentos[i];
  for (let funcionario of departamento.funcionarios) {
    console.log(
      `Funcionários: ${funcionario}, Departamento: ${departamento.nome}`
    );
  }
}
console.log("---------------------------------------------------------");

/* 15. Filtrando e Somando Valores

Crie um array de objetos transacoes, 
onde cada transação tem tipo (entrada ou saída) 
e valor. Use forEach para calcular o saldo 
final, somando as entradas e subtraindo 
as saídas. */

console.log("15. Filtrando e Somando Valores");
const transacoes = [
  { tipo: "entrada", valor: 500 },
  { tipo: "saida", valor: 300 },
  { tipo: "entrada", valor: 200 },
  { tipo: "saida", valor: 100 },
];

let saldo = 0;

transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    saldo += transacao.valor;
  } else if (transacao.tipo === "saida") {
    saldo -= transacao.valor;
  }
});
console.log(`Saldo final: R$ ${saldo}`);
console.log("---------------------------------------------------------");
