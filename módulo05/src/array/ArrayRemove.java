package array;

public class ArrayRemove {
    public static void main(String[] args) {
        String[] frutas = {"Maçã", "Banana", "Laranja", "Manga"};

        // Valor que será removido
        String frutaParaRemover = "Laranja";

        // Criar um novo array com uma posição a menos
        String[] novoArray = new String[frutas.length - 1];

        // Variável auxiliar para controlar o índice no novo array
        int index = 0;

        // Copiar os valores para o novo array, exceto o valor a ser removido
        for (int i = 0; i < frutas.length; i++) {
            if (!frutas[i].equals(frutaParaRemover)) {
                novoArray[index] = frutas[i];
                index++;
            }
        }

        // Exibir o array atualizado
        System.out.println("Array atualizado:");
        for (String fruta : novoArray) {
            System.out.println(fruta);
        }
    }

}
