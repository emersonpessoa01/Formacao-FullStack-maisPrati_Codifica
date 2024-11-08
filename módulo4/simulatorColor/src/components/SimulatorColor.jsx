import { useEffect, useState } from "react";

export default function SimulatorColor() {
  const [color, setColor] = useState("#ffffff");
  const [isActive, setIsActive] = useState(false);

  // Função para gerar uma cor aleatória
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setColor(getRandomColor());
      }, 2000);
    }

    // Limpar o intervalo ao desmontar o componente ou parar a mudança de cor
    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <div style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={() => setIsActive(!isActive)} style={{ padding: "10px 20px", fontSize: "16px" }}>
        {isActive ? "Parar" : "Iniciar"} Mudança de Cor
      </button>
    </div>
  );
}
