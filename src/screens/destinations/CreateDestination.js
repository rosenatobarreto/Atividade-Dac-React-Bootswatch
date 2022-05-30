import React from 'react';
import './CreateDestination.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class CreateDestination extends React.Component {

    state = {
        nomeDestino: "",
        localidade: "",
        tipoDestino: "",
        pacoteId: 0
    }

    create = async () => {
        await axios.post('http://localhost:8080/api/destino',
        {
            nomeDestino: this.state.nomeDestino,
	        localidade: this.state.localidade,
	        tipoDestino: this.state.tipoDestino,
	        pacoteId: this.state.pacoteId
        }
        ).then( response => 
            {
                console.log(response);
            }
        ).catch( error => 
            {
                console.log(error.response);
            } 
        ); 

        console.log('request finished');

    }


    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section">
                            <Card title="Cadastrar Destino">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Nome do Destino">
                                                <input type="text" className="form-control" placeholder="Nome do Destino" id="inputName"
                                                    value={this.state.nomeDestino} onChange={(e) => { this.setState({ nomeDestino: e.target.value }) }} />
                                            </FormGroup>


                                            <FormGroup label="Localidade">
                                                <input type="text" className="form-control" placeholder="Localidade" id="inputLocality"
                                                    value={this.state.localidade} onChange={(e) => { this.setState({ localidade: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Tipo de Destino">
                                                <input type="text" className="form-control" placeholder="Tipo de Destino" id="inputDestinationType"
                                                    value={this.state.tipoDestino} onChange={(e) => { this.setState({ tipoDestino: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Id do Pacote">
                                                <input type="number" className="form-control" placeholder="Id do Pacote" id="inputPackage"
                                                    value={this.state.pacoteId} onChange={(e) => { this.setState({ pacoteId: e.target.value }) }} />
                                            </FormGroup>
                                            <br />

                                            <button type="button" className="btn btn-success" onClick={this.create} >Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateDestination);
