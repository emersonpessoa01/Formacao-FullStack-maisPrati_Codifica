// import Logo from "./Logo";
import "../styles/index.css"
import Logo from "../assets/cruz-02.svg";
function Navigation() {
  return (
    <div className="Navigation">
      <div className="logo-autora">
        <div className="cruz">
          <img src={Logo} alt="Logo Autora" />
        </div>
        <div className="nome-navigation">Ana Clara Galli</div>
      </div>
      <div className="Navigation-itens">
        <div className="items">
          <p>
            <a href="#" id="linkKits">
              Kits
            </a>
          </p>

          <p>
            <a href="#" id="linkOndeComprar">
              Onde Comprar
            </a>
          </p>

          <p>
            <a href="#" id="linkFaleComigo">
              Fale Comigo
            </a>
          </p>
          <div className="button-navigation">
            <div className="ComprarAgora">
              <a id="ComprarAgora" href="https://www.catarse.me/rduvng" target="_blank">
                Comprar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
