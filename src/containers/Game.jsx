import React,{Suspense,useState} from 'react';
import {Container ,Row, Col} from 'react-bootstrap';
import Timer from '../components/Timer.jsx';
import Preloader from '../components/Preloader';
const GameArea = React.lazy(() => import('./GameArea.jsx'));
import Curtain from '../components/Curtain.jsx';

const Game = () => {
    const [gameStart,setGameStart] = useState(null);
    const [gameSettings, setGameSettings] = useState(false);
    const [stopTimer, setStopTimer] = useState(false);


    return(
        <div>
            <Container fluid={true}>
            <Row>
                <Col>
                    {<Timer startGame={gameStart} getTime={setTime} runTimer={stopTimer} />}
                </Col>
            </Row>
            <Row>
                <Col >
                    {(gameStart) ? <Suspense fallback={<Preloader />}><GameArea getSettings={gameSettings} endingGame={endGame} /></Suspense> : <Curtain />}
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Game;


