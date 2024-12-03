package fundamentos;

import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Exibir opções para o usuário
        System.out.println("Bem-vindo à fundamentos.CelsiusToFahrenheit.Calculadora!");
        System.out.println("Escolha a operação desejada:");
        System.out.println("1. Adição (+)");
        System.out.println("2. Subtração (-)");
        System.out.println("3. Multiplicação (*)");
        System.out.println("4. Divisão (/)");

        System.out.print("Digite o número da operação: ");
        int opcao = scanner.nextInt();

        // Solicitar os números
        System.out.print("Digite o primeiro número: ");
        double numero1 = scanner.nextDouble();

        System.out.print("Digite o segundo número: ");
        double numero2 = scanner.nextDouble();

        // Variável para armazenar o resultado
        double resultado;

        // Realizar a operação com base na escolha
        switch (opcao) {
            case 1: // Adição
                resultado = numero1 + numero2;
                System.out.println("Resultado: " + numero1 + " + " + numero2 + " = " + resultado);
                break;

            case 2: // Subtração
                resultado = numero1 - numero2;
                System.out.println("Resultado: " + numero1 + " - " + numero2 + " = " + resultado);
                break;

            case 3: // Multiplicação
                resultado = numero1 * numero2;
                System.out.println("Resultado: " + numero1 + " * " + numero2 + " = " + resultado);
                break;

            case 4: // Divisão
                if (numero2 != 0) {
                    resultado = numero1 / numero2;
                    System.out.println("Resultado: " + numero1 + " / " + numero2 + " = " + resultado);
                } else {
                    System.out.println("Erro: Divisão por zero não é permitida.");
                }
                break;

            default: // Opção inválida
                System.out.println("Opção inválida. Por favor, escolha entre 1 e 4.");
                break;
        }

        scanner.close();
    }
}
