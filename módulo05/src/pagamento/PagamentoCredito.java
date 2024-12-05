package pagamento;

public class PagamentoCredito extends Pagamento {
    public PagamentoCredito(double valor) {
        super(valor);
    }

    @Override
    public void realizarPagamento() {
        double taxa = valor * 0.02; // 2% de taxa
        double total = valor + taxa;
        System.out.printf("Pagamento via Crédito: R$%.2f (incluindo taxa de R$%.2f)%n", total, taxa);
    }
}
