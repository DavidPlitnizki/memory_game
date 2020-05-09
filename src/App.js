import React from 'react';
import {Container ,Row, Col} from 'react-bootstrap';
import styles from './styles/styles.scss';
import Game from './containers/Game.jsx';
import {useRoutes} from './routes';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import {useAuth} from './hooks/auth.hook';


const App = () => {
    const {isAuth} = useAuth();
    const routes = useRoutes(false);

    return(
        <Container fluid={true} className={styles.wrapper}>
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
        </Container>
    )
}


export default App;