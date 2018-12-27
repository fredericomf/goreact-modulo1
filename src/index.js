import React from "react";

// NOTA_ESTUDO: Outra forma seria desestruturando o Component e Fragment assim:
// import React, {Component, Fragment} from "react";

import { render } from "react-dom";

class Button extends React.Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

class App extends React.Component {
  render() {
    return (
      // NOTA_ESTUDO: Quando o componente tem mais de uma linha, o React obriga estar entre DIV. Isso pode ser um problema, dependendo do seu layout. Para que o React não coloque entre DIVs use o Fragment
      <React.Fragment>
        <h1>Hello Rocketseat</h1>
        <Button />
      </React.Fragment>
    );
  }
}

// NOTA_ESTUDO: Este render só será utilizado uma única vez na nossa aplicação, e é aqui. Depois, todos os outros componentes serão inseridos dentro do App
render(<App />, document.getElementById("app"));
