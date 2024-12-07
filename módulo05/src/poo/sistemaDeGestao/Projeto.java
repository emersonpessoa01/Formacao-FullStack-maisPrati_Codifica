package poo.sistemaDeGestao;

import java.util.ArrayList;
import java.util.List;

public class Projeto {
    private String nome;
    private List<Pessoa> membros;

    public Projeto(String nome) {
        this.nome = nome;
        this.membros = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public List<Pessoa> getMembros() {
        return membros;
    }

    public void adicionarMembro(Pessoa pessoa) {
        if (!membros.contains(pessoa)) {
            membros.add(pessoa);
            pessoa.adicionarProjeto(this);//Garante a associação recíproca
        }
    }

    public void listarMembros() {
        System.out.println("Membros do projeto " + nome + ":");
        for (Pessoa membro : membros) {
            System.out.println("- " + membro);
        }
    }

    @Override
    public String toString() {
        return "Projeto{" +
                "nome='" + nome + '\'' +
                ", membros=" + membros +
                '}';
    }
}
