import React from 'react';
import './CreateDestination.css';
import RegisterDestinations from './RegisterDestinations';

export default class UpdateDestination extends React.Component {

  render() {
    return (
      <div>
        <RegisterDestinations title="Atualizar Destino" btn="Atualizar" />
      </div>
    );
  }

}