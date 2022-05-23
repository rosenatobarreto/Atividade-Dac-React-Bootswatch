import React from 'react';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class DeleteDestination extends React.Component {

    state = {
        idDestino: 0,
    }

    delete = () => {
        axios.delete (`http://localhost:8080/api/destino/${this.state.idDestino}`,
        ).then( response => 
            {
                console.log(response);
                alert(`Destino ${this.state.idDestino} apagado!`);
            }
        ).catch( error =>
            {
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
                            <Card title="Apagar Destino">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Id do Destino: *">
                                                <input type="text" className="form-control" placeholder="Id" id="inputIdDestino"
                                                    value={this.state.idDestino} onChange={(e) => { this.setState({ idDestino: e.target.value }) }} />
                                            </FormGroup>

                                            <br />

                                            <button type="button" className="btn btn-success" onClick={this.delete} >Apagar</button>
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

export default withRouter(DeleteDestination);