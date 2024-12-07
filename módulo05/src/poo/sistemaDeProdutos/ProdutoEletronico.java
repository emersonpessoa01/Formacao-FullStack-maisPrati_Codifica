package poo.sistemaDeProdutos;

public class ProdutoEletronico extends Produto {
    private int garantiaEmMeses;

    public ProdutoEletronico(String nome, double preco, int garantiaEmMeses) {
        super(nome, preco);
        this.garantiaEmMeses = garantiaEmMeses;
    }

    @Override
    public double calcularPrecoFinal() {
        return preco * 1.05;

    }
}
