import React from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';
import NavBar from './components/NavBar';
import AppRoute from './main/AppRoute';

export default class App extends React.Component {

  
  render () {
    
    return (
      
      <div>
        <NavBar />
        <AppRoute />
        
      </div>
    );
  }

}




