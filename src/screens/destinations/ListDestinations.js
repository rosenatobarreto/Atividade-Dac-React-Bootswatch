import React from 'react';
import Card from '../../components/Card';

export default class ListDestination extends React.Component {

    render() {
        return (
            <Card title="Destinos">
                <div className="list-group">
                    <a href="/UpdateDestinationData" class="list-group-item">Destino a</a>
                    <a href="/UpdateDestinationData" class="list-group-item">Destino b</a>
                    <a href="/UpdateDestinationData" class="list-group-item">Destino c</a>
                    <a href="/UpdateDestinationData" class="list-group-item">Destino d</a>
                </div>
            </Card>
        );
    }
}




