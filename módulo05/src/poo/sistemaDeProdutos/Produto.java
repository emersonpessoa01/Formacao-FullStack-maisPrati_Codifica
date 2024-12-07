package poo.sistemaDeProdutos;

/*
//Crie um sistema de uma loja que vende produtos:
//Classe Produto:
//Atributos: nome, preco.
//        Método: calcularPrecoFinal(), que retorna o preço sem alterações.
//Subclasse ProdutoPerecivel:
//Atributos adicionais: dataDeValidade.
//Sobrescreva o método calcularPrecoFinal() para aplicar um desconto de 10% caso o produto esteja próximo da data de validade.
//Subclasse ProdutoEletronico:
//Atributos adicionais: garantiaEmMeses.
//Sobrescreva o método calcularPrecoFinal() para incluir uma taxa de garantia de 5% no preço.

//Implemente as classes e crie uma lista de produtos com diferentes tipos. Mostre o preço final de cada produto usando o
polimorfismo.*/

class Produto {
    protected String nome;
    protected double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public double calcularPrecoFinal() {
        return preco;
    }

    @Override
    public String toString() {
        return nome + " - Preço final: R$ " + String.format("%.2f", calcularPrecoFinal());
    }
}


