package pagamento;

// Programa principal
public class SistemaPagamentos {
    public static void main(String[] args) {
        // Criação de objetos de diferentes formas de pagamento
        Pagamento pagamento1 = new PagamentoCredito(100.00);
        Pagamento pagamento2 = new PagamentoDebito(200.00);
        PagamentoPix pagamento3 = new PagamentoPix(150.00);

        // Processando pagamentos usando polimorfismo
        pagamento1.realizarPagamento();
        pagamento2.realizarPagamento();

        // Processando pagamento Pix com e sem descrição (sobrecarga)
        pagamento3.realizarPagamento();
        pagamento3.realizarPagamento("Compra de produtos eletrônicos");
    }
}
