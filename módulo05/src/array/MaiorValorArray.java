package array;

public class MaiorValorArray {
    public static void main(String[] args) {

        int[] numeros = {12, 45, 7, 19, 32, 54, 23};


        int max = numeros[0];


        for (int i = 1; i < numeros.length; i++) {
            if (numeros[i] > max) {
                max = numeros[i];
                // Atualiza o valor máximo se encontrar um valor maior
            }
        }


        System.out.println("O maior valor no array é: " + max);
    }
}
