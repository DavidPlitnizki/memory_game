import React,{useState,useEffect, useCallback} from 'react';
import GameTile from '../components/GameTile.jsx';
import {useCompare} from '../hooks/compare.hook';
import {Container ,Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';

let canPlay = false;

const GameArea = ({getSettings, getWinner}) => {
    const [gameFields, setGameFilds] = useState(getSettings);
    const [pairsCount, setPairsCount] = useState(0);
    const [superiorTiles, setSuperiorTiles] = useState([]);
    const {compare} = useCompare();


    useEffect(()=> {
        canPlay = true;
    },[]);

    useEffect(()=> {
        compareTiles();
    },[gameFields]);

    useEffect(()=> {
        isFinishGame();
    },[pairsCount]);


    const onSelectTile =({id})=> {
        if(!canPlay) return;
        canPlay = false;
        let modTile;

        const modifiledTiles = gameFields.map((tile, i)=> {
            if(compare(i, id)) {
                if(!tile.selected){
                    tile.selected = !tile.selected;
                    modTile = tile;
                }
            }
            return tile;
        })
        setSuperiorTiles([...superiorTiles, modTile]);
        setGameFilds(modifiledTiles);
    }

    const isFinishGame =()=> {
        if(pairsCount === gameFields.length) {
            getWinner();
        }
    }

    const compareTiles= useCallback(()=> {

        setTimeout(()=> {
    
        if(superiorTiles.length === 2) {
            if( compare(superiorTiles[0].tile_num, superiorTiles[1].tile_num) ) {
                setPairsCount(pairsCount + 2);
                setSuperiorTiles([]);
            } else {
                const modifiledTiles = gameFields.map((tile)=> {
                    if(compare(superiorTiles[0].tile_num, tile.tile_num) ||
                     compare(superiorTiles[1].tile_num, tile.tile_num)) {
                        if(tile.selected) {
                            tile.selected = !tile.selected;
                        }
                    }
                    return tile;
                })
                setSuperiorTiles([]);
                setGameFilds(modifiledTiles);
                
            }
        }
        canPlay = true;
    },300)

    },[superiorTiles, gameFields])


    return (
        <Container className={styles.gameAreaCont}>
            <Row className='mb-2'>
               {
                gameFields.map((tile, i) => <GameTile num={tile.tile_num} id={i} key={`id_${i}`} select={onSelectTile} open={tile.selected} />)
               }
            </Row>
           
        </Container>
    )
}

GameArea.propTypes = {
    // endingGame: PropTypes.func.isRequired,
    // getSettings: PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     level: PropTypes.object.isRequired,
    //     time: PropTypes.number.isRequired,
    //     userName: PropTypes.string.isRequired
    // })
}

export default GameArea;