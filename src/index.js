import React from 'react';

// NOTA_ESTUDO: Outra forma seria desestruturando o Component e Fragment assim:
// import React, {Component, Fragment} from "react";

import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

/** NOTA_ESTUDO: Essa é a forma normal de definir,
 * fora da classe, sem ajuda de plugin do babel
 * */
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
    counter: 0,
  };

  /** NOTA_ESTUDO: Executa automaticamente na inicialização do componente.
   * Muito usado em inicializações de configs e listeners.
   * */
  componentDidMount() {}

  // NOTA_ESTUDO: Sempre que o componente for atualizado no state ou em uma propriedade.
  shouldComponentUpdate(_nextProps, _nextState) {
    // NOTA_ESTUDO: Se eu retornar "false" ele não renderiza o componente...
    return true;
  }

  /** NOTA_ESTUDO: Ele é executado DEPOIS de sofrer
   * a atualização (ao contrário do souldComponentUpdate) */
  componentDidUpdate(_prevProps, _prevState) {}

  /** NOTA_ESTUDO: Executa automaticamente quando o componente
   * for removido. Muito usado para limpar listeners e outras coisas.
   * */
  componentWillUnmount() {}

  handleClick = () => {
    // alert("Botão clicado");

    /** NOTA_ESTUDO: Abaixo dá erro porque eu não posso alterar
     * diretamente o valor de um estado (O estado é imutável)
     * */
    // this.state.counter += 1
    /**
     * NOTA_ESTUDO: Para funções normais o escopo do "this" é a
     * pŕopria função. Usa-se arrow function para referenciar escopo da classe
     * */

    // this.setState({ counter: this.state.counter + 1 }); // NOTA_ESTUDO: setState é assíncrono!
    // NOTA_ESTUDO: Exemplo de tratamento por callback após setState
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });

    /**
     * NOTA_ESTUDO: O exemplo abaixo utiliza a arrowfunction recebendo o
     * state na lista do setState. Assim, mesmo que assíncrono, o valor do
     * state atualizado é passado para o próximo na lista de atualização.
     */
    // NOTA_ESTUDO: Muito pouco utilizado (alterar um state após o outro)
    // this.setState(state => ({ counter: state.counter + 1 }));
    // this.setState(state => ({ counter: state.counter + 1 }));

    const { counter } = this.state;

    this.setState({ counter: counter + 1 }); // NOTA_ESTUDO: setState é assíncrono!
  };

  render() {
    const { counter } = this.state;

    return (
      /** NOTA_ESTUDO: Quando o componente tem mais de uma linha,
       * o React obriga estar entre DIV. Isso pode ser um problema,
       * dependendo do seu layout. Para que o React não coloque entre
       * DIVs use o Fragment
       * */
      <React.Fragment>
        <h1 style={{ color: '#F00' }}>Hello Rocketseat</h1>
        {/* Primeira forma de passar propriedades */}
        {/* <Button title="Enviaaaaaaaar" /> */}

        {/* Segunda forma de passar propriedades */}
        <Button onClick={this.handleClick}>Enviar</Button>

        <h2>{counter}</h2>
      </React.Fragment>
    );
  }
}

/** NOTA_ESTUDO: Este render só será utilizado uma única vez
 *  na nossa aplicação, e é aqui. Depois, todos os outros
 *  componentes serão inseridos dentro do App
 * */
render(<App />, document.getElementById('app'));
