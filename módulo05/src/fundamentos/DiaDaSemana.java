package fundamentos;

import java.util.Scanner;

public class DiaDaSemana {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita o número do dia da semana
        System.out.print("Digite um número (1 a 7) para o dia da semana: ");
        int numero = scanner.nextInt();

        // Determina o dia da semana com switch
        String dia;
        switch (numero) {
            case 1:
                dia = "Domingo";
                break;
            case 2:
                dia = "Segunda-feira";
                break;
            case 3:
                dia = "Terça-feira";
                break;
            case 4:
                dia = "Quarta-feira";
                break;
            case 5:
                dia = "Quinta-feira";
                break;
            case 6:
                dia = "Sexta-feira";
                break;
            case 7:
                dia = "Sábado";
                break;
            default:
                dia = "Número inválido! Por favor, insira um número entre 1 e 7.";
                break;
        }

        // Exibe o resultado
        System.out.println(dia);

        // Fecha o scanner
        scanner.close();
    }

}
