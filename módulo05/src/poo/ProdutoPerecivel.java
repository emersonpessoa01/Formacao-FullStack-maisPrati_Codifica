package poo;

import java.time.LocalDate;

public class ProdutoPerecivel extends Produto {
    private final LocalDate dataDeValidade;

    public ProdutoPerecivel(String nome, double preco, LocalDate dataDeValidade) {
        super(nome, preco);
        this.dataDeValidade = dataDeValidade;
    }

    public double calcularPrecoFinal() {
        //Regra para calcular o preço final com base na data de validate
        if (LocalDate.now().isAfter(dataDeValidade))
            return 0;
        else
            return preco;
    }
    @Override
    public String toString(){
        return nome + " - Preço final: R$ " + String.format("%.2f",calcularPrecoFinal());
    }
}
