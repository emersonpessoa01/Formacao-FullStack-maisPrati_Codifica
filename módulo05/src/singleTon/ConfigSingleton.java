package singleTon;

public class ConfigSingleton {
    // Atributo estático para armazenar a única instância
    private static ConfigSingleton instancia;

    // Atributo versão
    private String versao;

    // Construtor privado para evitar instâncias externas
    private ConfigSingleton() {
        this.versao = "1.0";
    }

    // Método estático para obter a única instância
    public static ConfigSingleton getInstancia() {
        if (instancia == null) {
            instancia = new ConfigSingleton();
        }
        return instancia;
    }

    // Getter para o atributo versão
    public String getVersao() {
        return versao;
    }

    // Setter para o atributo versão (opcional, se necessário)
    public void setVersao(String versao) {
        this.versao = versao;
    }
}
