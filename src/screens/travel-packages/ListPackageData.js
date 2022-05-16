import React from 'react';
export default class UpdatePackage extends React.Component {

    state = {
        namePackage: "Inverno 2023",
        timeOfYear: "Inverno",
        price: 8000,
        periodInDays: 10,
    }

    update1 = () => {

        console.log('Nome do Pacote: ', this.state.namePackage);
        console.log('Época do ano: ', this.state.timeOfYear);
        console.log('Preço: ', this.state.price);
        console.log('Período em Dias: ', this.state.periodInDays);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section">
                            <h3>Dados do Pacote</h3>
                            <div>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Atributos</th>
                                            <th scope="col">Valores</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="table-success">
                                            <th scope="row">Nome do Pacote</th>
                                            <td>{this.state.namePackage}</td>
                                        </tr>
                                        <tr class="table-success">
                                            <th scope="row">Época do ano</th>
                                            <td>{this.state.timeOfYear}</td>
                                        </tr>
                                        <tr class="table-success">
                                            <th scope="row">Preço</th>
                                            <td>{this.state.price}</td>
                                        </tr>
                                        <tr class="table-success">
                                            <th scope="row">Período em Dias</th>
                                            <td>{this.state.periodInDays}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}
