import React from 'react';
import {Container ,Row, Col} from 'react-bootstrap';
import styles from './styles/styles.scss';
import {useRoutes} from './routes';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';


const App = () => {
    const {isAuth, login, playerName, playerLevel} = useAuth();
    const isAuthenticated  = !!isAuth;
    const routes = useRoutes(isAuthenticated);

    return(
        <Container fluid={true} className={styles.wrapper}>
        <AuthContext.Provider value={{userLevel:playerLevel, userName:playerName, login, isAuthenticated}}>
        <Router>
            <Row>
                <Col>
                    {isAuth && <NavBar />}
                </Col>
            </Row>
            <Row>
                <Col>
                    {routes}
                </Col>
            </Row>
        </Router>
        </AuthContext.Provider>
        </Container>
    )
}


export default App;