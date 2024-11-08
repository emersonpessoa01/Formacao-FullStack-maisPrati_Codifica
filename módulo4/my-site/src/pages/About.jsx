import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Header";

function About() {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>Esta é a página Sobre com informações sobre o site.</p>
      <button className="btn" onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
}

export default About;
