import React from 'react';
import NavBarItem from './NavBarItem';

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Ekologic Tur</a>
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="/" label="Home" />
                        <NavBarItem href="/CreatePackage" label="Cadastrar Pacote" />
                        <NavBarItem href="/ListPackage" label="Listar Pacotes" />
                        <NavBarItem href="/UpdatePackage/:id" label="Atualizar Pacote" />
                        <NavBarItem href="/DeletePackage" label="Apagar Pacote" />
                        <NavBarItem href="/CreateDestination" label="Cadastrar Destino" />
                        <NavBarItem href="/ListDestination" label="Listar Destino" />
                        <NavBarItem href="/UpdateDestination/:id" label="Atualizar Destino" />
                        <NavBarItem href="/DeleteDestination" label="Apagar Destino" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;