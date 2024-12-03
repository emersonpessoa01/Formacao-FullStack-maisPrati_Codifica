package fundamentos;

import java.util.Scanner;

public class AnoBissexto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        System.out.print("Digite um ano: ");
        int ano = scanner.nextInt();


        boolean isBissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);


        if (isBissexto) {
            System.out.println(ano + " é um ano bissexto.");
        } else {
            System.out.println(ano + " não é um ano bissexto.");
        }


        scanner.close();
    }
}
