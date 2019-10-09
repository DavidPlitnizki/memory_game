import React,{Suspense,useState} from 'react';
import Timer from '../components/Timer.jsx';
import {Container ,Row, Col} from 'react-bootstrap';
import ListResultUser from '../components/Result/ListResultUser.jsx';
const GameArea = React.lazy(() => import('./GameArea.jsx'));
import Popup from '../components/Popup.jsx';
import Curtain from '../components/Curtain.jsx';

const Game = () => {
    const [gameStart,setGameStart] = useState(null);
    const [gameSettings, setGameSettings] = useState(false);
    const [users,setUsers] = useState([]);
    const [stopTimer, setStopTimer] = useState(false);

    
    const configGame =({userName,level})=>{
        let tmp_user = {
            userName,
            level,
            id: Date.now(),
            time: 0
        }
        setGameSettings(tmp_user);
        setGameStart(true);
        setStopTimer(true);
    }

    const endGame = () =>{
        setGameStart(false);
    }

    const setTime =(time)=> {
        let tmp_users = users.map(el => el);
        tmp_users.push({
            'userName': gameSettings.userName,
            'level': gameSettings.level,
            'id': gameSettings.id,
            time
        })
        setUsers(tmp_users.reverse());
        setStopTimer(false);
    }

    return(
        <div>
            <Popup show={!gameStart} setGame={configGame} />
            <Container fluid={true}>
            <Row>
                <Col>
                    {<Timer startGame={gameStart} getTime={setTime} runTimer={stopTimer} />}
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    {(gameStart) ? <Suspense fallback={<div>Loading...</div>}><GameArea getSettings={gameSettings} endingGame={endGame} /></Suspense> : <Curtain />}
                </Col>
                <Col sm={4}><ListResultUser user={users} /></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Game;


