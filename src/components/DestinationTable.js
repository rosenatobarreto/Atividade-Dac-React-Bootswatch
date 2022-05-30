/* eslint-disable import/no-anonymous-default-export */

import React from 'react';

export default props => {

    const rows = props.destinos.map( destino => { 
        return (
            <tr key={destino.idDestino}>
                <td>{destino.idDestino}</td>    
                <td>{destino.nomedestino}</td>    
                <td>{destino.localidade}</td>    
                <td>{destino.tipoDestino}</td>    
                <td>{destino.pacote}</td>  
                <td>
                    <button type="button" title="Editar" className="btn btn-success"
                    onClick={e => props.edit(destino.idDestino)}>
                    < i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir" className="btn btn-danger"
                    onClick={e => props.delete(destino.idDestino)}>
                    < i className="pi pi-trash"></i>
                    </button>
                </td>  
            </tr>
        );
    });

    return (
        <table className="table table-hover">
            <thread>
                <tr className="table-active">
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