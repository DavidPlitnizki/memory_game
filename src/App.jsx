import React from 'react'
import { Container } from 'react-bootstrap'
import {
    createBrowserRouter,
  } from "react-router-dom";
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import Preloader from './components/Preloader'
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      loader: <Preloader />
    },
    {
        path: "/main",
        element: <MainPage />,
        loader: <Preloader />
      },
      {
        path: "/result",
        element: <ResultPage />,
        loader: <Preloader />
      },
  ]);

const App = () => {
    const { isAuth, login, playerName, playerLevel } = useAuth()
    const isAuthenticated = !!isAuth


    return (
        <Container fluid={true} className='wrapper'>
            <AuthContext.Provider
                value={{
                    userLevel: playerLevel,
                    userName: playerName,
                    login,
                    isAuthenticated,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/result" element={<ResultPage />} />
                        
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </Container>
    )
}

export default App
