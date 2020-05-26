import React,{useState,useContext, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import {useAuth} from '../hooks/auth.hook';
import Game from '../containers/Game';
import {useStore} from '../hooks/store.hook';
import GameArea from '../containers/GameArea';
import Timer from '../components/Timer.jsx';
import {AuthContext} from '../context/AuthContext';
import {Container ,Row, Col} from 'react-bootstrap';

const initialTiles = [{'tile_num':1, 'selected':false},
                    {'tile_num':2, 'selected':false},
                    {'tile_num':3, 'selected':false},
                    {'tile_num':4, 'selected':false},
                    {'tile_num':5, 'selected':false},
                    {'tile_num':6, 'selected':false},
                    {'tile_num':7, 'selected':false},
                    {'tile_num':8, 'selected':false},
                    {'tile_num':9, 'selected':false},
                    {'tile_num':10, 'selected':false},
                    {'tile_num':11, 'selected':false},
                    {'tile_num':12, 'selected':false},
                    {'tile_num':13, 'selected':false},
                    {'tile_num':14, 'selected':false},
                    {'tile_num':15, 'selected':false}];

let playTime = "00:00";

const MainPage = () => {
    const {userName, userLevel} = useContext(AuthContext);
    // const {playerName, playerLevel} = useAuth();
    
    /* Will be 3 states init play finish */
    const [gameStart, SetGameStart] = useState(false);
    const [gameTiles, setGameTiles] = useState([]);
    const {setResult} = useStore();
    let history = useHistory();
    
    /* testing */
    useEffect(()=> {
        prepareGame();
    },[]);

    const prepareGame =()=> {
        let tempTilesArr = [].concat(initialTiles);
        const tileslength = setTIlesByLevel(userLevel.id);

       const filtredTiles = fillGameTiles(tempTilesArr, tileslength);

        if(filtredTiles.length > 0) {
            setGameTiles(filtredTiles);
            SetGameStart(true);
        }
    }

    const fillGameTiles =(tiles, tileslength)=>{
        let fArr=[];
        let sArr=[];
        let filtredTiles = [];

        while(tileslength) {
            let selectedTile = Math.floor(Math.random() * tileslength);

            /**random positions in arraies */
            const t1 = setRandomRageNumber(0, tileslength);
            const t2 = setRandomRageNumber(0, tileslength);

            /**fill arraies */
            fillDirectionArray(fArr, t1, {
                'tile_num' : tiles[selectedTile].tile_num,
                'selected' : tiles[selectedTile].selected
            }, 'END');
            fillDirectionArray(sArr, t2, {
                'tile_num' : tiles[selectedTile].tile_num,
                'selected' : tiles[selectedTile].selected
            }, 'START');

            //cut array
            tiles.splice(selectedTile,1);

            tileslength--;
        }

        filtredTiles = fArr.concat(sArr).filter((el)=> el != null);
        return filtredTiles;
    }

    const setRandomRageNumber = (startPoint, endPoint) => {
        return Math.floor(Math.random() * endPoint) + startPoint;
    }

    const fillDirectionArray = (arr, index, data, dir) => {
        if(arr[index] && dir === 'END') {
            arr.push(data);
        }else if(arr[index] && dir === 'START') {
            arr.unshift(data);
        } else {
            arr[index] = data;
        }
    }

    const setWinner =()=> {
        SetGameStart(false);
        const player = {
            name: userName,
            level: userLevel,
            time: playTime
        }
        setResult(player);
        history.push("/result");
        console.log(player);
    }

    const saveTime =(time)=> {
        playTime = time;
    }


    const setTIlesByLevel =(id)=>{
        switch (id){
            case 1:
                //5
                return 2;
            case 2:
                return 10;
            case 3:
                return 15;
            default:
                return 5;
        }
    }

    return (
        <Container>
            <Row>
                <Col>{gameStart && <Timer startGame={gameStart} getTime={saveTime} />}</Col>
            </Row>
            <Row>
                <Col>{gameStart && <GameArea getSettings={gameTiles} getWinner={setWinner} />}</Col>
            </Row>
        </Container>
    )
}

export default MainPage;