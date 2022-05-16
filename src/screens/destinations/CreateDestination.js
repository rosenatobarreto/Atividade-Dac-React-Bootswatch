import React from 'react';
import './CreateDestination.css';
import RegisterDestinations from './RegisterDestinations';

export default class CreateDestination extends React.Component {

  render() {
    return (
      <div>
        <RegisterDestinations title="Cadastrar Destino" btn="Cadastrar" />
      </div>
    );
  }
}