package poo.sistemaDeUniversidade;

import java.util.ArrayList;
import java.util.List;

// Classe Departamento
class Departamento {
    private String nome;
    private List<Professor> professores;

    public Departamento(String nome) {
        this.nome = nome;
        this.professores = new ArrayList<>();
    }

    public void adicionarProfessor(Professor professor) {
        professores.add(professor);
    }

    public String getNome() {
        return nome;
    }

    public List<Professor> getProfessores() {
        return professores;
    }
}
