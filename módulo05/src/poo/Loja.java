package poo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Loja {
    public static void main(String[] args) {
        List<Produto> produtos = new ArrayList<>();

        //Adicionando produtos

        produtos.add(new Produto("Caderno", 25.00));
        produtos.add(new ProdutoPerecivel("Leite", 6.50, LocalDate.now().plusDays(5)));
        produtos.add(new ProdutoPerecivel("Queijo",30.00, LocalDate.now().plusDays(10)));
        produtos.add(new ProdutoEletronico("Smartphone",1200.00,24));
        produtos.add(new ProdutoEletronico("Fone de ouvido",200.00,12));

        //Exibindo os preços finais de cada produto
        for (Produto produto:produtos){
            System.out.println(produto);
        }

    }
}
