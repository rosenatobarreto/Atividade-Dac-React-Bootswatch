import React from "react";
import 'bootswatch/dist/sandstone/bootstrap.css';
import Card from './components/Card';
import FormGroup from './components/FormGroup';


export default class Login extends React.Component {

    state = {
        email: "",
        password: "",
    }

    enter = () => {

        if (this.state.email === 'monteiro@ifpb.edu.br' && this.state.password == 123){
            console.log('Você está logado');
            this.props.history.push('/');

        } else{
            alert('Você não está logado, tente novamente!');
        }
        
        
    }

    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section">
                            <Card title="Login no Sistema">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="E-mail">
                                                <input type="text" className="form-control" placeholder="Email" id="email"
                                                    value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                            </FormGroup>
                                            <FormGroup label="Senha">
                                                <input type="text" className="form-control" placeholder="Senha" id="password"
                                                    value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                            </FormGroup>
                                            <br />

                                            <button type="button" className="btn btn-success" onClick={this.enter} >Entrar</button>
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
