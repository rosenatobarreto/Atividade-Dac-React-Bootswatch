import React from 'react';
import './ListPackage.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import PackageTable from '../../components/PackageTable';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ListPackage extends React.Component {

  state = {
    nomePacote: "",
    epoca: "",
    preco: "",
    periodoEmDias: "",
    idPacote: 0,
    pacotes: []
  }

  delete = (idPacote) => {
    axios.delete(`http://localhost:8080/api/pacote/${idPacote}`,
    ).then(response => {
      this.find();
    }
    ).catch(error => {
      console.log(error.response);
    }
    );
  }

  edit = (idPacote) => {
    this.props.history.push(`/UpdatePackage/${idPacote}`);
  }

  find = () => {
    var params = '?';

    if (this.state.idPacote !== '') {
      if (params !== '?') {
        params = `${params})&`;
      }
      params = `${params}idPacote=${this.state.idPacote}`;
    }

    if (this.state.nomePacote !== '') {
      if (params !== '?') {
        params = `${params}&`;
      }
      params = `${params}nomePacote=${this.state.nomePacote}`;
    }

    if (this.state.epoca !== '') {
      if (params !== '?') {
        params = `${params}&`;
      }
      params = `${params}epoca=${this.state.epoca}`;
    }

    if (this.state.preco !== '') {
      if (params !== '?') {
        params = `${params}&`;
      }
      params = `${params}preco=${this.state.preco}`;
    }

    if (this.state.periodoEmDias !== '') {
      if (params !== '?') {
        params = `${params}&`;
      }
      params = `${params}periodoEmDias=${this.state.periodoEmDias}`;
    }

    axios.get(`http://localhost:8080/api/pacote/${params}`,
    ).then(response => {
      const pacotes = response.data;
      this.setState({ pacotes });
      console.log(pacotes);
    }
    ).catch(error => {
      console.log(error.response);
    }
    );
  }

  findAll = () => {
    axios.get(`http://localhost:8080/api/pacote/all`,
    ).then(response => {
      const pacotes = response.data;
      this.setState({ pacotes });
      console.log(pacotes);
    }
    ).catch(error => {
      console.log(error.response);
    }
    );
  }


  render() {
    return (
      <div className="container">
        <Card title="Pesquisar Pacote">
          <div className="row">
            <div className="col-md-12">
              <div className="bs-component">
                <FormGroup htmlFor="inputId" label="Id do Pacote: *">
                  <input type="text" className="form-control" placeholder="Id do Pacote" id="inputId"
                    value={this.state.idPacote} onChange={(e) => { this.setState({ idPacote: e.target.value }) }} />
                </FormGroup>
                <FormGroup htmlFor="inputName" label="Nome do Pacote: *">
                  <input type="text" className="form-control" placeholder="Nome do Pacote" id="inputName"
                    value={this.state.nomePacote} onChange={(e) => { this.setState({ nomePacote: e.target.value }) }} />
                </FormGroup>


                <FormGroup htmlFor="inputTimeOfYear" label="Época do ano: *">
                  <input type="text" className="form-control" placeholder="Época do ano" id="inputTimeOfYear"
                    value={this.state.epoca} onChange={(e) => { this.setState({ epoca: e.target.value }) }} />
                </FormGroup>

                <FormGroup htmlFor="inputPrice" label="Preço: *">
                  <input type="number" className="form-control" placeholder="Preço" id="inputPrice"
                    value={this.state.preco} onChange={(e) => { this.setState({ preco: e.target.value }) }} />
                </FormGroup>

                <FormGroup htmlFor="inputPeriod" label="Período em Dias: *">
                  <input type="number" className="form-control" placeholder="Período em Dias" id="inputPeriod"
                    value={this.state.periodoEmDias} onChange={(e) => { this.setState({ periodoEmDias: e.target.value }) }} />
                </FormGroup>
                <br />

                <button type="button" className="btn btn-success" onClick={this.find} >
                  <i className="pi pi-search"></i> Filtrar</button>

                <button type="button" className="btn btn-search-all" onClick={this.findAll} >
                  <i className="pi pi-search"></i> Buscar todos</button>

                <br />

              </div>
            </div>
          </div>


        </Card>

        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <br />
              <h5>Resultados:</h5>
              <PackageTable pacotes={this.state.pacotes} delete={this.delete} edit={this.edit} />


            </div>
          </div>
        </div>



      </div>

    );
  }
}


export default withRouter(ListPackage);