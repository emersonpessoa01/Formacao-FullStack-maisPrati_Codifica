package poo.sistemaDeGestao;

import org.w3c.dom.ls.LSOutput;

public class gestaoDeProjetos {
    public static void main(String[] args) {

        // Implementar métodos para gerenciar projetos
        // Criar pessoas
        Pessoa pessoa1 = new Pessoa("Luciene");
        Pessoa pessoa2 = new Pessoa("Emerson");

        // Criar projetos
        Projeto projeto1 = new Projeto("Projeto A");
        Projeto projeto2 = new Projeto("Projeto B");

        //Adicionar membors aos projetos
        pessoa1.adicionarProjeto(projeto1);
        pessoa1.adicionarProjeto(projeto2);

        pessoa2.adicionarProjeto(projeto1);

        /// Listar membros dos projetos
        projeto1.listarMembros();
        projeto2.listarMembros();

        //Verificar projetos associados a uma pessoa
        System.out.println("Projetos de "+ pessoa1.getNome()+ ":");
        for (Projeto projeto : pessoa1.getProjetos()){
            System.out.println("- "+ projeto.getNome());
        }
    }
}
