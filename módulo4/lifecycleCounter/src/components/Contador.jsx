import { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Componente montado");
    alert("Componente montado");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Contador atualizado");

      // Exibe um alerta quando count é múltiplo de 5
      if (this.state.count > 0 && this.state.count % 5 === 0) {
        alert(`O valor do contador é ${this.state.count}, um múltiplo de 5!`);
      }
    }
  }

  componentWillUnmount() {
    console.log("Componente será desmontado");
    alert("Componente será desmontado");
  }

  incrementar = () => {
    this.setState((prevState) => {
      if (prevState.count < 10) {
        return { 
          count: prevState.count + 1 
        };
      }
      return prevState;
    });
  };

  decrementar = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return { 
          count: prevState.count - 1 
        };
      }
      return prevState;
    });
  };

  resetar = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <p>Contador: {this.state.count}</p>
        <div className="box-btn">
          <button onClick={this.incrementar} disabled={this.state.count === 10}>
            Incrementar
          </button>
          <button onClick={this.decrementar} disabled={this.state.count === 0}>
            Decrementar
          </button>
        </div>
      </div>
    );
  }
}

export default Contador;
