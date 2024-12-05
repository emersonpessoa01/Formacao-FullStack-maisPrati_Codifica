package singleTon;

import singleTon.ConfigSingleton;

public class Main {
    public static void main(String[] args) {
        // Obter duas instâncias de ConfigSingleton
        ConfigSingleton instancia1 = ConfigSingleton.getInstancia();
        ConfigSingleton instancia2 = ConfigSingleton.getInstancia();

        // Verificar se ambas referenciam o mesmo objeto
        System.out.println("Instância 1: " + instancia1);
        System.out.println("Instância 2: " + instancia2);

        // Testar se os objetos são iguais
        if (instancia1 == instancia2) {
            System.out.println("Ambas as instâncias referenciam o mesmo objeto.");
        } else {
            System.out.println("As instâncias são diferentes.");
        }

        // Exibir a versão
        System.out.println("Versão: " + instancia1.getVersao());
    }
}
