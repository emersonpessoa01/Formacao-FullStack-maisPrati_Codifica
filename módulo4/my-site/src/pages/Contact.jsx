import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Header";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>As informações de contato estão aqui.</p>
      <button className="btn" onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
}

export default Contact;
