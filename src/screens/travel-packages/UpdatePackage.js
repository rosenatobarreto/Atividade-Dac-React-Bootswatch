import React from 'react';
import './CreatePackage.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class UpdatePackage extends React.Component {

    state = {
        idPacote: 0,
        nomePacote: "",
        epoca: "",
        preco: "",
        periodoEmDias: ""
    }

    update = async () => {
        await axios.put(`http://localhost:8080/api/pacote/${this.state.idPacote}`,
        {
            nomePacote: this.state.nomePacote,
	        epoca: this.state.epoca,
	        preco: this.state.preco,
	        periodoEmDias: this.state.periodoEmDias
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
                            <Card title="Atualizar Pacote">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>

                                            <FormGroup label="Id do Pacote">
                                                <input type="text" className="form-control" placeholder="Id do Pacote" id="inputIdPacote"
                                                    value={this.state.idPacote} onChange={(e) => { this.setState({ idPacote: e.target.value }) }} />
                                            </FormGroup>
                                            <FormGroup label="Nome do Pacote">
                                                <input type="text" className="form-control" placeholder="Nome do Pacote" id="inputName"
                                                    value={this.state.nomePacote} onChange={(e) => { this.setState({ nomePacote: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Época do ano">
                                                <input type="text" className="form-control" placeholder="Época do ano" id="inputTimeOfYear"
                                                    value={this.state.epoca} onChange={(e) => { this.setState({ epoca: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Preço">
                                                <input type="number" className="form-control" placeholder="Preço" id="inputPrice"
                                                    value={this.state.preco} onChange={(e) => { this.setState({ preco: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Período em Dias">
                                                <input type="number" className="form-control" placeholder="Período em Dias" id="inputPeriod"
                                                    value={this.state.periodoEmDias} onChange={(e) => { this.setState({ periodoEmDias: e.target.value }) }} />
                                            </FormGroup>
                                            <br />

                                            <button type="button" className="btn btn-success" onClick={this.update} >Atualizar</button>
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

export default withRouter(UpdatePackage);

