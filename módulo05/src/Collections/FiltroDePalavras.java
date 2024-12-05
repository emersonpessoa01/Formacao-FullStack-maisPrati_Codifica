package Collections;

import java.util.ArrayList;
import java.util.Scanner;

public class FiltroDePalavras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita a frase do usuário
        System.out.println("Digite uma frase:");
        String frase = scanner.nextLine();

        // Divide a frase em palavras e as armazena em um ArrayList
        String[] palavras = frase.split("\\s+");
        ArrayList<String> listaPalavras = new ArrayList<>();

        for (String palavra : palavras) {
            listaPalavras.add(palavra);
        }

        // Remove palavras com menos de 4 caracteres
        listaPalavras.removeIf(palavra -> palavra.length() < 4);

        // Exibe a lista filtrada
        System.out.println("Lista de palavras com 4 ou mais caracteres:");
        System.out.println(listaPalavras);

        scanner.close();
    }
}
