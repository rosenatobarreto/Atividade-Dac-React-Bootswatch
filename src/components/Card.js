import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import './Card.css';

export default class Card extends React.Component {

    render() {

        return (

            <div className="card-container">
            <div className="card border-success mb-3">
                <h3 className="card-header">{this.props.title}</h3>
                <div className="card-body">{this.props.children}</div>
            </div>
            </div>

        )
    }

}