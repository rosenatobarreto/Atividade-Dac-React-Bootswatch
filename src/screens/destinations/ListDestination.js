import React from 'react';
import './ListDestination.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import DestinationTable from '../../components/DestinationTable';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ListDestination extends React.Component {

    state = {
        idDestino: 0,
        nomeDestino: "",
        localidade: "",
        tipoDestino: "",
        pacoteId: 0,
        destinos: []
    }

    delete = (idDestino) => {
      axios.delete(`http://localhost:8080/api/destino/${idDestino}`,
      ).then(response => {
          this.find();
      }
      ).catch(error => {
          console.log(error.response);
      }
      );
  }

  edit = (idDestino) => {
      this.props.history.push(`/updateUser/${idDestino}`);
  }

  find = () => {
      var params = '?';

      if (this.state.idDestino !== '') {
          if (params !== '?') {
              params = `${params}&`;
          }

          params = `${params}id=${this.state.idDestino}`;
      }

      if (this.state.nomeDestino !== '') {
          if (params !== '?') {
              params = `${params}&`;
          }

          params = `${params}nomeDestino=${this.state.nomeDestino}`;
      }

      if (this.state.localidade !== '') {
          if (params !== '?') {
              params = `${params}&`;
          }

          params = `${params}localidade=${this.state.localidade}`;
      }

      if (this.state.tipoDestino !== '') {
          if (params !== '?') {
              params = `${params}&`;
          }

          params = `${params}tipoDestino=${this.state.tipoDestino}`;
      }

      if (this.state.pacoteId !== '') {
          if (params !== '?') {
              params = `${params}&`;
          }

          params = `${params}pacoteId=${this.state.pacoteId}`;
      }

      axios.get(`http://localhost:8080/api/destino/${params}`)
          .then(response => {
              const destinos = response.data;
              this.setState({ destinos });
              console.log(destinos);
          }
          ).catch(error => {
              console.log(error.response);
          }
          );
  }

  findAll = () => {

      axios.get(`http://localhost:8080/api/destino/all`)
          .then(response => {
              const destinos = response.data;
              this.setState({ destinos });
              console.log(destinos);
          }
          ).catch(error => {
              console.log(error.response);
          }
          );
  }

    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section">
                            <Card title="Pesquisar Destino">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Id do Destino: *">
                                                <input type="number" className="form-control" placeholder="Id do Destino" id="inputIdDestination"
                                                    value={this.state.idDestino} onChange={(e) => { this.setState({ idDestino: e.target.value }) }} />
                                            </FormGroup>
                                            <FormGroup label="Nome do Destino: *">
                                                <input type="text" className="form-control" placeholder="Nome do Destino" id="inputName"
                                                    value={this.state.nomeDestino} onChange={(e) => { this.setState({ nomeDestino: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Localidade: *">
                                                <input type="text" className="form-control" placeholder="Localidade" id="inputLocality"
                                                    value={this.state.localidade} onChange={(e) => { this.setState({ localidade: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Tipo de Destino: *">
                                                <input type="text" className="form-control" placeholder="Tipo de Destino" id="inputDestinationType"
                                                    value={this.state.tipoDestino} onChange={(e) => { this.setState({ tipoDestino: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Pacote: *">
                                                <input type="number" className="form-control" placeholder="Pacote" id="inputPackage"
                                                    value={this.state.pacoteId} onChange={(e) => { this.setState({ pacoteId: e.target.value }) }} />
                                            </FormGroup>
                                            
                                            <br />

                                            <button type="button" className="btn btn-success" onClick={this.find} >
                                                <i className="pi pi-search"></i> Filtrar</button>

                                            <button type="button" className="btn btn-search-all" onClick={this.findAll} >
                                                <i className="pi pi-search"></i> Buscar todos</button>

                                            <br />
                                            
                                        </fieldset>
                                    </div>
                                </div>

                            </Card>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bs-component">
                                        <br />
                                        <h5>Resultados:</h5>
                                        <DestinationTable destinos={this.state.destinos} delete={this.delete} edit={this.edit}/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ListDestination);
