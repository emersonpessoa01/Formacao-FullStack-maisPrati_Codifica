package agenciaBancaria;

public class ContaBancaria {

    // Atributos da conta
    private final int numeroConta;
    private double saldo;
    private final Usuario titular;

    //Constructor

    public ContaBancaria(int numeroConta, Usuario titular) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = 0.0; //Saldo inicial é 0
    }

    //Getters


    public int getNumeroConta() {
        return numeroConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public Usuario getTitular() {
        return titular;
    }

    //método depositar
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.printf("Depósito de valor R$: %.2f%n", valor);
        } else {
            System.out.println("Valor de depósito inválido");
        }
    }

    //método sacar
    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.printf("Saque de valor R$: %.2f%n", valor);
        } else if (valor > saldo) {
            System.out.println("Saldo insuficiente para realizar o saque");
        } else {
            System.out.println("Valor de saque inválido");
        }
    }

    //transferir
    public void transferir(ContaBancaria contaBancaria, double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            contaBancaria.depositar(valor);
            System.out.println("Transferência de R$" + valor + " para a conta " + contaBancaria.getNumeroConta() + " realizada com sucesso!");
        } else if (valor > saldo) {
            System.out.println("Saldo insuficiente para realizar a transferência");

        } else {
            System.out.println(
                    "Valor de transferência inválido"
            );
        }
    }
}