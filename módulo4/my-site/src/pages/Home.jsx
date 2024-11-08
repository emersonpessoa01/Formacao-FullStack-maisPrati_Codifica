import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Header";
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section className="container">
        <h1>Home</h1>
        <div className="buttons">
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/services")}>Services</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
