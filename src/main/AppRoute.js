import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import Home from "../screens/home/Home";
import CreatePackage from "../screens/travel-packages/CreatePackage";
import ListPackage from "../screens/travel-packages/ListPackage";
import CreateDestination from "../screens/destinations/CreateDestination";
import UpdateDestination from "../screens/destinations/UpdateDestination";
import ListDestinations from "../screens/destinations/ListDestinations";
import UpdateDestinationData from "../screens/destinations/UpdateDestinationData";
import ListPackageData from "../screens/travel-packages/ListPackageData";
import Login from "../Login";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path = "/" exact />
            <Route component = { CreatePackage } path="/CreatePackage" />
            <Route component = { ListPackage } path="/ListPackage" />
            <Route component = { CreateDestination } path = "/CreateDestination" />
            <Route component = { UpdateDestination } path="/UpdateDestination" />
            <Route component = { ListDestinations } path="/ListDestinations" />
            <Route component = { UpdateDestinationData } path="/UpdateDestinationData" />
            <Route component = { ListPackageData } path="/ListPackageData" />
            <Route component = { Login } path="/Login" />
            
        </BrowserRouter>
    );
}

export default AppRoutes;