import React from 'react';
import './CreateDestination.css';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

export default class UpdateDestinationData extends React.Component {

    state = {        
        nameDestination: "Gramado",
        locality: "Gramado-RS",
        destinationType: "Nacional",
        package: "Inverno 2023" 
    }

    update = () => {
        this.props.history.push('/CreateDestination');
        console.log('Nome do Destino: ',this.state.nameDestination);
        console.log('Localidade: ',this.state.locality);
        console.log('Tipo de Destino: ',this.state.destinationType);
        console.log('Pacote: ',this.state.package);
    }


    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section">
                            <Card title="Atualizar Destino">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Nome do Destino">
                                                <input type="text" className="form-control" placeholder="Nome do Pacote" id="inputName"
                                                value={this.state.nameDestination} onChange={(e) => { this.setState({ nameDestination: e.target.value }) }} />
                                            </FormGroup>


                                            <FormGroup label="Localidade">
                                                <input type="text" className="form-control" placeholder="Época do ano" id="inputLocality"
                                                value={this.state.locality} onChange={(e) => { this.setState({ locality: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Tipo de Destino">
                                                <input type="text" className="form-control" placeholder="Preço" id="inputDestinationType"
                                                value={this.state.destinationType} onChange={(e) => { this.setState({ destinationType: e.target.value }) }} />
                                            </FormGroup>

                                            <FormGroup label="Pacote">
                                                <input type="text" className="form-control" placeholder="Período em Dias" id="inputPackage"
                                                value={this.state.package} onChange={(e) => { this.setState({ package: e.target.value }) }} />
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



