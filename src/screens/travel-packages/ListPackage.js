import React from 'react';
import Card from '../../components/Card';

export default class ListPackage extends React.Component {

  render() {
    return (
      <Card title="Pacotes">

        <div className="list-group">
          <a href="/ListPackageData" className="list-group-item">Pacote Verão 2022</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Inverno 2023</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Águas Termais</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Explorando Bonito</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Nordeste Aventura</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Serra Gaúcha</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Fernando de Noronha</a>
          <a href="/ListPackageData" className="list-group-item">Pacote Jalapão</a>
        </div>
      </Card>

      

    );
  }
}
