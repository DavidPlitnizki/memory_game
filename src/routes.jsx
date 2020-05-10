import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';

export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return ( 
        <Switch>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Route path="/main" exact>
                <MainPage />
            </Route>
            <Route path="/result" exact>
                <ResultPage />
            </Route>
            <Redirect to="/main" />
        </Switch>
       )
    }else {
        return (
        <Switch>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Redirect to="/login" />
        </Switch>
        )
    }
}