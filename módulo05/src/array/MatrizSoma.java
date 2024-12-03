package array;

public class MatrizSoma {
    public static void main(String[] args) {
        int[][] matriz = {
                {10, 20, 30},
                {40, 50, 60},
                {70, 80, 90}
        };

        int somaPrincipal = 0;
        int somaSecundaria = 0;

        for (int i = 0;i < matriz.length;i++){
            somaPrincipal += matriz[i][i];

            somaSecundaria += matriz[i][matriz.length - 1 -i];
        }

        System.out.println("Soma da diagonal principal: "+ somaPrincipal);
        System.out.println("Soma da diagonal principal: "+ somaSecundaria);
    }
}
