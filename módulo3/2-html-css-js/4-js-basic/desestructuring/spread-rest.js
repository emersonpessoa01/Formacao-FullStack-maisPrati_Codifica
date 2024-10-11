// Crie uma função chamada calculaMedia que aceita uma quantidade indefinida de notas de estudantes e calcula a média dessas notas.

// Instruções:

//     Use o operador rest para capturar todas as notas passadas como argumentos.
//     Dentro da função, some todas as notas e divida pela quantidade de notas para calcular a média.

function calculaMedia(...notas) {
    // Verifica se não há notas
    if (notas.length === 0) {
        return 0; // Retorna 0 se não houver notas
    }

    // Soma todas as notas
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    // Calcula a média
    const media = soma / notas.length;

    return media;
}

// Exemplo de uso
const media = calculaMedia(7, 8, 9, 10);
console.log(`A média das notas é: ${media}`); // Saída: A média das notas é: 8.5


// Imagine que você está desenvolvendo um sistema de e-commerce e precisa mesclar os dados de um cliente com uma atualização recente. Os dados antigos estão em um objeto, e os dados novos chegam em outro. Utilize o operador spread para criar um novo objeto contendo as informações atualizadas.

// Instruções:

//     Use o operador spread para combinar os dois objetos, dando prioridade aos dados mais recentes.

// Dados antigos do cliente
const dadosAntigos = {
    nome: "João Silva",
    email: "joao.silva@email.com",
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo"
    },
    telefone: "1234-5678"
};

// Dados novos do cliente (atualização)
const dadosNovos = {
    email: "joao.silva.novo@email.com", // Novo email
    endereco: {
        rua: "Rua B", // Novo endereço
        numero: 456,
        cidade: "São Paulo"
    },
    telefone: "9876-5432" // Novo telefone
};

// Mesclando os dados antigos com os dados novos
const dadosAtualizados = {
    ...dadosAntigos,
    ...dadosNovos,
    endereco: {
        ...dadosAntigos.endereco,
        ...dadosNovos.endereco // Mesclando os endereços
    }
};

// Exibindo o objeto atualizado
console.log(dadosAtualizados);


// Suponha que você tem uma lista de produtos em um carrinho de compras e deseja adicionar novos produtos sem modificar o array original. Use o operador spread para criar uma nova lista de produtos.

// Instruções:

//     Use o operador spread para adicionar novos itens a um array já existente.

// Lista original de produtos no carrinho
const carrinho = [
    { id: 1, nome: "Produto A", preco: 50 },
    { id: 2, nome: "Produto B", preco: 30 }
];

// Novos produtos a serem adicionados
const novosProdutos = [
    { id: 3, nome: "Produto C", preco: 20 },
    { id: 4, nome: "Produto D", preco: 40 }
];

// Criando um novo array com os produtos existentes e os novos produtos
const novoCarrinho = [
    ...carrinho,        // Produtos existentes
    ...novosProdutos    // Novos produtos
];

// Exibindo o novo carrinho
console.log(novoCarrinho);
