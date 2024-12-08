package poo.sistemaDeUniversidade;

import java.util.ArrayList;
import java.util.List;

// Classe Universidade
class Universidade {
    private String nome;
    private List<Departamento> departamentos;

    public Universidade(String nome) {
        this.nome = nome;
        this.departamentos = new ArrayList<>();
    }

    public void adicionarDepartamento(Departamento departamento) {
        departamentos.add(departamento);
    }

    public String getNome() {
        return nome;
    }

    public List<Departamento> getDepartamentos() {
        return departamentos;
    }
}
