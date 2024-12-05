package Collections;

import java.util.LinkedList;
import java.util.Scanner;

public class FilaDeEspera {
    public static void main(String[] args) {
        // Criação da fila de espera
        LinkedList<String> fila = new LinkedList<>();

        // Adicionando os nomes iniciais na fila
        fila.add("Ana");
        fila.add("Pedro");
        fila.add("Maria");
        fila.add("João");

        Scanner scanner = new Scanner(System.in);

        while (!fila.isEmpty()) {
            // Exibe a fila atual
            System.out.println("Fila de espera: " + fila);

            // Exibe o próximo nome a ser atendido
            System.out.println("Próximo a ser atendido: " + fila.peek());

            // Opções de ação para o usuário
            System.out.println("\nEscolha uma opção:");
            System.out.println("1. Adicionar um novo nome à fila");
            System.out.println("2. Remover o próximo nome da fila");
            System.out.println("3. Sair");

            int opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir o newline após o número

            switch (opcao) {
                case 1:
                    // Adicionar novo nome à fila
                    System.out.println("Digite o nome para adicionar à fila:");
                    String nome = scanner.nextLine();
                    fila.add(nome);
                    break;
                case 2:
                    // Remover o próximo nome da fila
                    System.out.println(fila.poll() + " foi atendido e removido da fila.");
                    break;
                case 3:
                    System.out.println("Saindo do sistema...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida! Tente novamente.");
            }
        }

        System.out.println("\nA fila está vazia.");
        scanner.close();
    }
}
