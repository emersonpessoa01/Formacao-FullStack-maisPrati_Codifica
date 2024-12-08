package pagamento;

abstract class Pagamento {
    protected double valor;

    public Pagamento(double valor) {
        this.valor = valor;
    }
    public abstract void realizarPagamento();
}
