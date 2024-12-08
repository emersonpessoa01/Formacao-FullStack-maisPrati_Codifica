package poo.sistemaDeUniversidade;

import java.util.ArrayList;
import java.util.List;

// Classe Professor
class Professor {
    private String nome;
    private List<Disciplina> disciplinas;

    public Professor(String nome) {
        this.nome = nome;
        this.disciplinas = new ArrayList<>();
    }

    public void adicionarDisciplina(Disciplina disciplina) {
        disciplinas.add(disciplina);
    }

    public String getNome() {
        return nome;
    }

    public List<Disciplina> getDisciplinas() {
        return disciplinas;
    }
}
