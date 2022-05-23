import React from 'react';
import './CreateDestination.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class RegisterDestination extends React.Component {

    state = {
        nameDestination: "",
        locality: "",
        destinationType: "",
        package: 0
    }

    create = async () => {
        await axios.post('http://localhost:8080/api/destino',
        {
            nomeDestino: this.state.nameDestination,
	        localidade: this.state.locality,
	        tipoDestino: this.state.destinationType,
	        pacote: this.state.package
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
                                                    value={this.state.nameDestination} onChange={(e) => { this.setState({ nameDestination: e.target.value }) }} />
                                            </FormGroup>


                                            <FormGroup label="Localidade">
                                                <input type="text" className="form-control" placeholder="Localidade" id="inputLocality"
                                                    value={this.state.locality} onChange={(e) => { this.setState({ locality: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Tipo de Destino">
                                                <input type="text" className="form-control" placeholder="Tipo de Destino" id="inputDestinationType"
                                                    value={this.state.destinationType} onChange={(e) => { this.setState({ destinationType: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Id do Pacote">
                                                <input type="number" className="form-control" placeholder="Id do Pacote" id="inputPackage"
                                                    value={this.state.package} onChange={(e) => { this.setState({ package: e.target.value }) }} />
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

export default withRouter(RegisterDestination);
