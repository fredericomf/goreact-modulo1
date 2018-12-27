import React from "react";
import PropTypes from "prop-types";

// NOTA_ESTUDO: Outra forma seria desestruturando o Component e Fragment assim:
// import React, {Component, Fragment} from "react";

import { render } from "react-dom";

class Button extends React.Component {
  render() {
    // Primeira forma de receber propriedades
    // return <a href="">{this.props.title}</a>;

    // Segunda forma de receber propriedades
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends React.Component {
  handleClick() {
    alert("Botão clicado");
  }

  render() {
    return (
      // NOTA_ESTUDO: Quando o componente tem mais de uma linha, o React obriga estar entre DIV. Isso pode ser um problema, dependendo do seu layout. Para que o React não coloque entre DIVs use o Fragment
      <React.Fragment>
        <h1>Hello Rocketseat</h1>
        {/* Primeira forma de passar propriedades */}
        {/* <Button title="Enviaaaaaaaar" /> */}

        {/* Segunda forma de passar propriedades */}
        <Button onClick={this.handleClick}>Enviar</Button>

        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
      </React.Fragment>
    );
  }
}

// NOTA_ESTUDO: Este render só será utilizado uma única vez na nossa aplicação, e é aqui. Depois, todos os outros componentes serão inseridos dentro do App
render(<App />, document.getElementById("app"));
