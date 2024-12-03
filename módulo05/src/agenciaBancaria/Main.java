package agenciaBancaria;

public class Main {
    public static <contaBancaria> void main(String[] args) {
        //Criando usuário
        Usuario usuario1 = new Usuario("Emerson Pessoa", "123.456.789-00");
        Usuario usuario2 = new Usuario("Luciene Ferreira", "987.654.321-00");

        //Criando contas bancárias
        ContaBancaria conta1 = new ContaBancaria(1001, usuario1);
        ContaBancaria conta2 = new ContaBancaria(1002, usuario2);

        //Ralizando operações
        conta1.depositar(500);
        conta1.sacar(200);
        conta1.transferir(conta2,150);


        //Exibindo saldos
        System.out.println("Saldo da conta" + conta1.getNumeroConta() + ": R$" + conta1.getSaldo());
        System.out.println("Saldo da conta" + conta2.getNumeroConta() + ": R$" + conta2.getSaldo());


    }
}
