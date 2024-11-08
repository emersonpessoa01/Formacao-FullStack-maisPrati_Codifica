import { useState } from "react";

const produtos = [
  { id: 1, nome: "Produto 1", inStock: true },
  { id: 2, nome: "Produto 2", inStock: false },
  { id: 3, nome: "Produto 3", inStock: true },
  { id: 4, nome: "Produto 4", inStock: false },
  { id: 5, nome: "Produto 5", inStock: true },
];

export default function ListProduct() {
  const [mostrarApenasEmEstoque, setMostrarApenasEmEstoque] = useState(false);

  // Função para alternar o estado do filtro
  const alternarFiltro = () => {
    setMostrarApenasEmEstoque(!mostrarApenasEmEstoque);
  };

  // Filtragem dos produtos com base no estado `mostrarApenasEmEstoque`
  const produtosFiltrados = mostrarApenasEmEstoque ? produtos.filter((produto) => produto.inStock) : produtos;

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <button onClick={alternarFiltro}>{mostrarApenasEmEstoque ? "Mostrar Apenas Produtos em Estoque" : "Mostrar todos os produtos"}</button>
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.id}>
            {produto.nome} {produto.inStock ? "(Em Estoque)" : "(Fora de Estoque)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
