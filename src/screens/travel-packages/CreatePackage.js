import React from 'react';
import './CreatePackage.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class CreatePackage extends React.Component {

    state = {
        namePackage: "",
        timeOfYear: "",
        price: "",
        periodInDays: ""
    }

    create = async () => {
        await axios.post('http://localhost:8080/api/pacote',
        {
            nomePacote: this.state.namePackage,
	        epoca: this.state.timeOfYear,
	        preco: this.state.price,
	        periodoEmDias: this.state.periodInDays
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
                            <Card title="Criar Pacote">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Nome do Pacote">
                                                <input type="text" className="form-control" placeholder="Nome do Pacote" id="inputName"
                                                    value={this.state.namePackage} onChange={(e) => { this.setState({ namePackage: e.target.value }) }} />
                                            </FormGroup>


                                            <FormGroup label="Época do ano">
                                                <input type="text" className="form-control" placeholder="Época do ano" id="inputTimeOfYear"
                                                    value={this.state.timeOfYear} onChange={(e) => { this.setState({ timeOfYear: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Preço">
                                                <input type="number" className="form-control" placeholder="Preço" id="inputPrice"
                                                    value={this.state.price} onChange={(e) => { this.setState({ price: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Período em Dias">
                                                <input type="number" className="form-control" placeholder="Período em Dias" id="inputPeriod"
                                                    value={this.state.periodInDays} onChange={(e) => { this.setState({ periodInDays: e.target.value }) }} />
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

export default withRouter(CreatePackage);

