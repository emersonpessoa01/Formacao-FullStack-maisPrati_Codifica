package agenciaBancaria;

public class Usuario {
    //Inicialize com nome e cpf
    String nome;
    String cpf;

    public Usuario(String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    //Getters e Setters
    public String getNome() {
        return nome;
    }


    public String getCpf() {
        return cpf;
    }


}
