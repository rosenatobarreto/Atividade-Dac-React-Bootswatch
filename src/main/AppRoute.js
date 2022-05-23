import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import Home from "../screens/home/Home";
import CreatePackage from "../screens/travel-packages/CreatePackage";
import ListPackage from "../screens/travel-packages/ListPackage";
import UpdatePackage from "../screens/travel-packages/UpdatePackage";
import DeletePackage from "../screens/travel-packages/DeletePackage";
import CreateDestination from "../screens/destinations/CreateDestination";
import UpdateDestination from "../screens/destinations/UpdateDestination";
import ListDestination from "../screens/destinations/ListDestination";
import DeleteDestination from "../screens/destinations/DeleteDestination";

import Login from "../Login";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path = "/" exact />
            <Route component = { CreatePackage } path="/CreatePackage" />
            <Route component = { ListPackage } path="/ListPackage" />
            <Route component = { UpdatePackage } path="/UpdatePackage/:id" />
            <Route component = { DeletePackage } path="/DeletePackage" />
            <Route component = { CreateDestination } path = "/CreateDestination" />
            <Route component = { ListDestination } path="/ListDestination" />
            <Route component = { UpdateDestination } path="/UpdateDestination/:id" />
            <Route component = { DeleteDestination } path="/DeleteDestination" />
            <Route component = { Login } path="/Login" />


            
        </BrowserRouter>
    );
}

export default AppRoutes;