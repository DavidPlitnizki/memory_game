import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Preloader from './components/Preloader'
const LoginPage = lazy(() => import('./pages/LoginPage'))
const MainPage = lazy(() => import('./pages/MainPage'))
const ResultPage = lazy(() => import('./pages/ResultPage'))

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/login" exact>
                    <Suspense fallback={<Preloader />}>
                        <LoginPage />
                    </Suspense>
                </Route>
                <Route path="/main" exact>
                    <Suspense fallback={<Preloader />}>
                        <MainPage />
                    </Suspense>
                </Route>
                <Route path="/result" exact>
                    <Suspense fallback={<Preloader />}>
                        <ResultPage />
                    </Suspense>
                </Route>
                <Redirect to="/main" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/login" exact>
                    <Suspense fallback={<Preloader />}>
                        <LoginPage />
                    </Suspense>
                </Route>
                <Redirect to="/login" />
            </Switch>
        )
    }
}
