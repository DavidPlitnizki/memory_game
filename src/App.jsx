import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './components/NavBar'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'

const App = () => {
    const { isAuth, login, playerName, playerLevel } = useAuth()
    const isAuthenticated = !!isAuth
    const routes = useRoutes(isAuthenticated)


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
                <Router>
                    <Row>
                        <Col>{isAuth && <NavBar />}</Col>
                    </Row>
                    <Row>
                        <Col>{routes}</Col>
                    </Row>
                </Router>
            </AuthContext.Provider>
        </Container>
    )
}

export default App
