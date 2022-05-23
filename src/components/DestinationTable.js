/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {

    const rows = props.destinations.map( destination => { 
        return (
            <tr key={destination.idDestino}>
                <td>{destination.idDestino}</td>    
                <td>{destination.nomedestino}</td>    
                <td>{destination.localidade}</td>    
                <td>{destination.tipoDestino}</td>    
                <td>{destination.pacote}</td>  
                <td>
                    <button type="button" title="Editar" className="btn btn-success"
                    onClick={e => props.edit(destination.idDestino)}>
                    < i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir" className="btn btn-danger"
                    onClick={e => props.delete(destination.idDestino)}>
                    < i className="pi pi-trash"></i>
                    </button>
                </td>  
            </tr>
        );
    });

    return (
        <table className="table table-hover">
            <thread>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome do Destino</th>
                    <th scope="col">Localidade</th>
                    <th scope="col">Tipo de Destino</th>
                    <th scope="col">Pacote</th>
                </tr>
            </thread>
            <tbody>
                {rows}
            </tbody>
        </table>
    );

}