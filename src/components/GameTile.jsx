import React from 'react';
import PropTypes from 'prop-types'
import { memo } from 'react'

const GameTile = memo(({ id, num, select, open }) => {
    const matchedClass = open ? 'matched' : ''
    return (
        <div
            className={'tile ' + `${matchedClass}`}
            onClick={() => select({ id, value: num })}
        >
            <img className='frontImg' src={`../assets/${num}.png`} />
            <img className='backImg' src={`../assets/0.png`} />
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
