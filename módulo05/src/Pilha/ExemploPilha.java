package Pilha;

import java.util.Stack;

public class ExemploPilha {
    public static void main(String[] args) {
        // Criando uma pilha
        Stack<String> pilha = new Stack<>();

        // Adicionando elementos na pilha
        pilha.push("Primeiro");
        pilha.push("Segundo");
        pilha.push("Terceiro");

        // Exibindo a pilha
        System.out.println("Pilha: " + pilha);

        // Acessando o elemento do topo sem removê-lo
        System.out.println("Topo da pilha: " + pilha.peek());

        // Removendo o elemento do topo
        String removido = pilha.pop();
        System.out.println("Elemento removido: " + removido);

        // Exibindo a pilha após a remoção
        System.out.println("Pilha após pop: " + pilha);

        // Verificando se a pilha está vazia
        System.out.println("A pilha está vazia? " + pilha.isEmpty());
    }
}
