import React from "react";

import "./Home.css";

import {withRouter} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1 className="home-title">Sua agência de turismo ecológico</h1>
            </div>
        );
    };
}

export default withRouter(Home);