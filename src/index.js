import React from "react";
import PropTypes from "prop-types";

// NOTA_ESTUDO: Outra forma seria desestruturando o Component e Fragment assim:
// import React, {Component, Fragment} from "react";

import { render } from "react-dom";

class Button extends React.Component {
  /**
   * NOTA_ESTUDO: Para funcionar dentro da classe é necessário instalar um plugin do babel: proposal-class-properties (Consulte o Readme)
   */
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    // Primeira forma de receber propriedades
    // return <a href="">{this.props.title}</a>;

    // Segunda forma de receber propriedades
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

// NOTA_ESTUDO: Essa é a forma normal de definir, fora da classe, sem ajuda de plugin do babel
// Button.defaultProps = {
//   children: "Salvar"
// };

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.string
// };

class App extends React.Component {
  // NOTA_ESTUDO: Toda vez que o state é alterado, o método render() é chamado
  state = {
    counter: 0
  };

  handleClick = () => {
    // alert("Botão clicado");
    // this.state.counter += 1 // NOTA_ESTUDO: Isso dá erro porque eu não posso alterar diretamente o valor de um estado (O estado é imutável)

    // NOTA_ESTUDO: Para funções normais o escopo do 'this' é a pŕopria função. Usa-se arrow function para referenciar escopo da classe
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      // NOTA_ESTUDO: Quando o componente tem mais de uma linha, o React obriga estar entre DIV. Isso pode ser um problema, dependendo do seu layout. Para que o React não coloque entre DIVs use o Fragment
      <React.Fragment>
        <h1>Hello Rocketseat</h1>
        {/* Primeira forma de passar propriedades */}
        {/* <Button title="Enviaaaaaaaar" /> */}

        {/* Segunda forma de passar propriedades */}
        <Button onClick={this.handleClick}>Enviar</Button>

        <h2>{this.state.counter}</h2>
      </React.Fragment>
    );
  }
}

// NOTA_ESTUDO: Este render só será utilizado uma única vez na nossa aplicação, e é aqui. Depois, todos os outros componentes serão inseridos dentro do App
render(<App />, document.getElementById("app"));
