package fundamentos;

import java.util.Scanner;

public class Login {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Credenciais do sistema (nome de usuário e senha)
        String usuarioCorreto = "admin";
        String senhaCorreta = "12345";

        System.out.print("Digite o nome de usuário: ");
        String usuario = scanner.nextLine();

        // Verifica o nome de usuário
        if (usuario.equals(usuarioCorreto)) {
            int tentativas = 0;
            boolean autenticado = false;

            // Permitir até 3 tentativas para a senha
            while (tentativas < 3 && !autenticado) {
                System.out.print("Digite a senha: ");
                String senha = scanner.nextLine();

                if (senha.equals(senhaCorreta)) {
                    autenticado = true;
                    System.out.println("fundamentos.DiaDaSemana.Login realizado com sucesso!");
                } else {
                    tentativas++;
                    if (tentativas < 3) {
                        System.out.println("Senha incorreta. Tente novamente.");
                    }
                }
            }

            if (!autenticado) {
                System.out.println("As senhas não correspondem. Número de tentativas excedido.");
            }
        } else {
            System.out.println("Usuário não encontrado.");
        }

        scanner.close();
    }
}
