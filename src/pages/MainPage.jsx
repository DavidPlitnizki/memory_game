import React,{useState,useContext} from 'react';
import {useAuth} from '../hooks/auth.hook';
import Game from '../containers/Game';
import Timer from '../components/Timer.jsx';
import {AuthContext} from '../context/AuthContext';
import {Container ,Row, Col} from 'react-bootstrap';

const MainPage = () => {
    const {userName, userLevel} = useContext(AuthContext);
    // const {playerName, playerLevel} = useAuth();
    
    /* Will be 3 states init play finish */
    const [gameStart, SetGameStart] = useState(true);
    

    // const configGame =()=> {
    //     let tmp_user = {
    //         userName,
    //         level,
    //         id: Date.now(),
    //         time: 0
    //     }
        // setGameSettings(tmp_user);
        // setGameStart(true);
        // setStopTimer(true);
    // }

    const saveTime =(time)=> {

    }


    return (
        <Container>
            <Row>
                <Col>{<Timer startGame={gameStart} getTime={saveTime} />}</Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default MainPage;