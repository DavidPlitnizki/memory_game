import PropTypes from 'prop-types'
import React, {memo} from 'react'

import styles from '../styles/styles.scss'

const GameTile = memo(({ id, num, select, open }) => {
    const matchedClass = open ? styles.matched : ''
    return (
        <div
            className={styles.tile + ' ' + `${matchedClass}`}
            onClick={() => select({ id, value: num })}
        >
            <img className={styles.frontImg} src={`../assets/${num}.png`} />
            <img className={styles.backImg} src={`../assets/0.png`} />
        </div>
    )
});

GameTile.propTypes = {
    id: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    select: PropTypes.func.isRequired,
}

export default GameTile;
