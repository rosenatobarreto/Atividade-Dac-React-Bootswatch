import React from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import {withRouter} from 'react-router-dom';

class DeletePackage extends React.Component {

    state = {
        idPacote: 0,
    }

    delete = () => {
        axios.delete (`http://localhost:8080/api/pacote/${this.state.idPacote}`,
        ).then( response => 
            {
                this.find();
                alert(`Pacote ${this.state.idPacote} apagado!`);
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
            <Card title="Apagar Pacote">
              <div className="row">
                <div className="col-lg-6">
                  <div className="bs-component">
                    <FormGroup htmlFor="inputId" label="Id do Pacote: *">
                      <input type="text" className="form-control" placeholder="Id do Pacote" id="inputId"
                        value={this.state.idPacote} onChange={(e) => { this.setState({ idPacote: e.target.value }) }} />
                    </FormGroup>

                    <br />
    
                    <button type="button" className="btn btn-success" onClick={this.delete} >
                      <i className="pi pi-search"></i>Apagar</button>

    
                    <br />
    
                  </div>
                </div>
              </div>
              
    
            </Card>
    
    
    
          </div>
    
        );
      }

}

export default withRouter(DeletePackage);