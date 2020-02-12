import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/user/Register'
import Login from './components/user/Login'
import Home from './components/core/home'

const Routes = () => {
    return (
        <BrowserRouter>        
            <Switch>
                <Route path='/' exact component={Home} />   
                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={Login} />
            </Switch>
        </BrowserRouter>)
};

export default Routes