package pagamento;

class PagamentoPix extends Pagamento {
    public PagamentoPix(double valor) {
        super(valor);
    }

    @Override
    public void realizarPagamento() {
        System.out.printf("Pagamento via Pix: R$%.2f (sem taxas)%n", valor);
    }

    // Sobrecarga do método realizarPagamento para adicionar uma descrição
    public void realizarPagamento(String descricao) {
        System.out.printf("Pagamento via Pix: R$%.2f (sem taxas) | Descrição: %s%n", valor, descricao);
    }
}
