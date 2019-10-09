import React from 'react';
import {Container ,Row, Col} from 'react-bootstrap';
import styles from '../styles/styles.scss';
import Game from './Game.jsx';



const App = props => {
    return(
        <Container fluid={true} className={styles.wrapper}>
            <Row>
                <Col>
                    <Game />
                </Col>
            </Row>
        </Container>
    )
}


export default App;