package pagamento;

class PagamentoDebito extends Pagamento {
    public PagamentoDebito(double valor) {
        super(valor);
    }

    @Override
    public void realizarPagamento() {
        double taxa = valor * 0.01; // 1% de taxa
        double total = valor + taxa;
        System.out.printf("Pagamento via Débito: R$%.2f (incluindo taxa de R$%.2f)%n", total, taxa);
    }
}
