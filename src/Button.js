import React from 'react';
import PropTypes from 'prop-types';

/**
 *  NOTA_ESTUDO: Componente STATELESS: Componente que
 * não tem estado e deve ser implementado como função (não usa state)
 */
const Button = ({ onClick, children }) => (
  <button type="submit" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

/** NOTA_ESTUDO: Componente STATEFUL: Componente que
 *  tem estado e deve ser implementado como classe.
 * (O exemplo abaixo não manipula o state)
 * */
// export default class Button extends React.Component {
// /**
//  * NOTA_ESTUDO: Para funcionar dentro da classe é necessário
//  * instalar um plugin do babel: proposal-class-properties (Consulte o Readme)
//  */
//   static defaultProps = {
//     children: 'Salvar'
//   };

//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   };

//   render() {
//     // Primeira forma de receber propriedades
//     // return <a href=''>{this.props.title}</a>;

//     // Segunda forma de receber propriedades
//     return <button onClick={this.props.onClick}>{this.props.children}</button>;
//   }
// }

export default Button;
