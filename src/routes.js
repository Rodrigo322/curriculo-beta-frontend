import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import New from './pages/New';
import UserLogin from './pages/UserLogin';
import Worker from './pages/Worker'
import Index from './pages/Index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/index" component={Index} />

                <Route path="/profile" component={Profile} />
                <Route path="/new" component={New} />
                <Route path="/userlogin" component={UserLogin} />
                <Route path="/worker" component={Worker} />
            </Switch>
        </BrowserRouter>
    )
}

