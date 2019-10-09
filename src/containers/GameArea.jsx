import React,{useState,useEffect} from 'react';
import GameTile from '../components/GameTile.jsx';
import {Container ,Row} from 'react-bootstrap';
import styles from '../styles/styles.scss';


let firstSelectedTile = 0;
let secondSelectedTile = 0;
let initialTiles = [{'tile_num':1, 'selected':false},
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
const GameArea = (props) => {

    let tiles_img = [...initialTiles];
    let firstStepArray = [];
    let secondStepArray = [];
    let finishArray = [];
     let _moves = 0;
     let _maxiles = 0;
    
     const [tiles, setTiles] = useState([]);
     useEffect(()=>{
        prepaireArray();
    },[]);
    const [moves, setMoves] = useState(0);
    const [maxiles, setMaxiles] = useState(0);
    
    const setDifficult =(id)=>{
        switch (id){
            case 1:
                return 5;
            case 2:
                return 10;
            case 3:
                return 15;
            default:
                return 5;
        }
    }
    
    const prepaireArray =()=>{
        _moves = setDifficult(props.getSettings.level.id);
        _maxiles = setDifficult(props.getSettings.level.id);
        
        firstStepArray = fillRandomalyData(tiles_img, firstStepArray);
        let tmpArray = firstStepArray.map(el => el);
        secondStepArray = fillRandomalyData(tmpArray, secondStepArray);
        finishArray = firstStepArray.concat(secondStepArray);
        setTiles(finishArray);
        setMoves(_moves);
        setMaxiles(_maxiles);
    }

    const fillRandomalyData =(arrayData, filledArray)=>{
        let i = 0;
        for(i; i<_maxiles; i++){
            let selectedEl = Math.floor(Math.random() * arrayData.length);
            let newObj = {
                'tile_num' : arrayData[selectedEl].tile_num,
                'selected' : arrayData[selectedEl].selected
            }
            filledArray.push(newObj);
            arrayData.splice(selectedEl,1);
        }
        return filledArray;
    }

    const selectTile =({id,value})=>{
        let tmp_arr = tiles.filter((el,i)=>{
            if(i === id && !el.select){
              el.selected = true;
            }
            return el;
        });
        setTiles(tmp_arr);
        setSelectedTiles(value);        
    }

    const setSelectedTiles =(val)=>{
        if(!firstSelectedTile){
          firstSelectedTile = val;
        }else if(!secondSelectedTile){
          secondSelectedTile = val;
            setTimeout(()=>{
                checkMatchingTiles();
            },500)
            
        }
    }

    const checkMatchingTiles =()=>{
        if(firstSelectedTile === secondSelectedTile){
            resetCurrentSelected();
            leaveMove();
        }else if(firstSelectedTile !== secondSelectedTile && firstSelectedTile && secondSelectedTile){
            restoreSelectedTiles();
            resetCurrentSelected();
        }
    }

    const resetCurrentSelected=()=>{
        firstSelectedTile = 0;
        secondSelectedTile = 0;
    }

    const leaveMove =()=>{
        let tmp_moves = moves -1;
        setMoves(tmp_moves);
        checkGameState(tmp_moves);
    }
    const checkGameState =(val)=>{        
        if(val === 0){
            props.endingGame();
        }
    }

    const restoreSelectedTiles =()=>{
        let tmp_arr = tiles.filter((el,i)=>{
            if(el.tile_num == firstSelectedTile || el.tile_num == secondSelectedTile){
              el.selected = false;
            }
            return el;
        });
        setTiles(tmp_arr);
    }


    const renderGameTile=()=>{
        let arr = [];
        if(tiles.length > 0){
            return arr = tiles.map((el,i)=>{
                return <GameTile num={el.tile_num} id={i} key={'id_'+i} select={selectTile} open={el.selected} />
            })
        }
        return arr;
        
    }


    return (
        <Container className={styles.gameAreaCont}>
            <Row className='mb-2'>
               {renderGameTile()}
            </Row>
           
        </Container>
    )
}

export default GameArea;