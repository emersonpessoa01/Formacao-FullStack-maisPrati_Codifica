package poo.sistemaDeGestao;

import java.util.ArrayList;
import java.util.List;


public class Pessoa {
    private String nome;
    private final List<Projeto> projetos;

    public Pessoa(String nome) {
        this.nome = nome;
        this.projetos = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public List<Projeto> getProjetos() {
        return projetos;
    }

    public void adicionarProjeto(Projeto projeto) {
        if (!projetos.contains(projeto)) {
            projetos.add(projeto);
            projeto.adicionarMembro(this); //Garante a associação recíproca
        }
    }

    @Override
    public String toString() {
        return nome;
    }
}
