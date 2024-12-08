package poo.sistemaDeUniversidade;

// Classe Principal
public class SistemaUniversidade {
    public static void main(String[] args) {
        // Criando uma universidade
        Universidade universidade = new Universidade("Universidade XYZ");

        // Criando departamentos
        Departamento departamentoTI = new Departamento("Tecnologia da Informação");
        Departamento departamentoEngenharia = new Departamento("Engenharia");

        // Adicionando departamentos à universidade
        universidade.adicionarDepartamento(departamentoTI);
        universidade.adicionarDepartamento(departamentoEngenharia);

        // Criando professores
        Professor professorAna = new Professor("Ana");
        Professor professorCarlos = new Professor("Carlos");

        // Adicionando professores ao departamento de TI
        departamentoTI.adicionarProfessor(professorAna);
        departamentoTI.adicionarProfessor(professorCarlos);

        // Criando disciplinas
        Disciplina disciplinaJava = new Disciplina("Programação em Java");
        Disciplina disciplinaBancoDeDados = new Disciplina("Banco de Dados");

        // Adicionando disciplinas ao professor Ana
        professorAna.adicionarDisciplina(disciplinaJava);
        professorCarlos.adicionarDisciplina(disciplinaBancoDeDados);

        // Exibindo dados
        System.out.println("Universidade: " + universidade.getNome());
        for (Departamento dept : universidade.getDepartamentos()) {
            System.out.println("  Departamento: " + dept.getNome());
            for (Professor prof : dept.getProfessores()) {
                System.out.println("    Professor: " + prof.getNome());
                for (Disciplina disc : prof.getDisciplinas()) {
                    System.out.println("      Disciplina: " + disc.getNome());
                }
            }
        }
    }
}