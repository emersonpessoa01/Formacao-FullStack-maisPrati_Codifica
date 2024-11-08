import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Header";

function Services() {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Services</h1>
      <p>Lista de serviços oferecidos.</p>
      <button className="btn" onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
}

export default Services;
