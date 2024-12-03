package array;

public class ArrayAdd {
    public static void main(String[] args) {
        String[] frutas = {"Maça","Banana","Laranja"};

        String novaFruta = "Manga";

        String[] novoArray = new String[frutas.length + 1];

        for(int i = 0;i < frutas.length; i++){
            novoArray[i] = frutas[i];
        }

        novoArray[frutas.length] = novaFruta;

        System.out.println("Array atualizado");
        for(String i:novoArray){
            System.out.println(i);
        }

    }
}
