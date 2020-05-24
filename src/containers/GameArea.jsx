import React,{useState,useEffect, useCall} from 'react';
import GameTile from '../components/GameTile.jsx';
import {Container ,Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';

const GameArea = ({getSettings}) => {
    const [gameFields, setGameFilds] = useState(getSettings);
    const [superiorTiles, setSuperiorTiles] = useState([]);
    const [canClick, setCanClick] = useState(false);


    useEffect(()=> {
        setCanClick(true);
    },[]);

    useEffect(()=> {
       setTimeout(()=> {
        compareTiles();
       },300);
    },[gameFields]);

    const onSelectTile =({id, value})=> {
        let modTile;
        if(!canClick) return;
        const modifiledTiles = gameFields.map((tile, i)=> {
            if(i === id) {
                tile.selected = !tile.selected;
                modTile = tile;
            }
            return tile;
        })
        setCanClick(false);
        setSuperiorTiles([...superiorTiles, modTile]);
        setGameFilds(modifiledTiles);
    }

    const compareTiles=()=> {
        if(superiorTiles.length > 1) {
            if(superiorTiles[0].tile_num === superiorTiles[1].tile_num) {
                setSuperiorTiles([]);
            } else {
                const modifiledTiles = gameFields.map((tile, i)=> {
                    if(superiorTiles[0].tile_num === tile.tile_num || superiorTiles[1].tile_num === tile.tile_num) {
                        if(tile.selected) {
                            tile.selected = !tile.selected;
                        }
                    }
                    return tile;
                })

                setGameFilds(modifiledTiles);
                setSuperiorTiles([]);
            }
        }
        setCanClick(true);
    }

    const renderGameTile=()=>{
        let arr = [];
        if(gameFields.length > 0){
            return arr = gameFields.map((tile,i)=>{
                return <GameTile num={tile.tile_num} id={i} key={'id_'+i} select={onSelectTile} open={tile.selected} />
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