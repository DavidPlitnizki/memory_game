import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';



const GameTile = props => {
    function selectCard() {
        props.select({'id':props.id,'value':props.num});
    } 

    const matchedClass = (props.open) ? styles.matched : '';
    return (
        <div className={styles.tile + ' ' + `${matchedClass}`} onClick={selectCard}>
            <img className={styles.frontImg} src={`../assets/${props.num}.png`} />
            <img className={styles.backImg} src={`../assets/0.png`} />
        </div>
    )
}

GameTile.propTypes = {
    id: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    select: PropTypes.func.isRequired
}

export default GameTile;