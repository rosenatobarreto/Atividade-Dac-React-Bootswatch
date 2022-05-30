/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => { 
    const rows = props.pacotes.map( pacote => {
        return (
            
            <tr key={pacote.idPacote}>
                <td>{pacote.idPacote}</td>
                <td>{pacote.nomePacote}</td>
                <td>{pacote.epoca}</td>
                <td>{pacote.preco}</td>
                <td>{pacote.periodoEmDias}</td>
                <td>
                    <button type="button" title="Editar" className="btn btn-success"
                        onClick={e => props.edit(pacote.idPacote)}>
                    </button>
                    <button type="button" title="Excluir" className="btn btn-danger"
                        onClick={e => props.delete(pacote.idPacote)}>
                    </button>
                </td>
            </tr>
    
        )
    }
    );

    return ( 
        
        <table className="table table-hover">
            <thread>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome do Pacote</th>
                    <th scope="col">Época</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Período em Dias</th>
                </tr>
            </thread>
            <tbody>
                {rows}
            </tbody>
    </table>
 
 
 );
 
 
}
