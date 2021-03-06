import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewService from './pages/NewService';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/service/new" component={NewService} />
            </Switch>
        </BrowserRouter>
    );
}