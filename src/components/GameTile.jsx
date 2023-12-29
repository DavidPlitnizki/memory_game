import React from 'react';
import PropTypes from 'prop-types'
import { memo } from 'react'

const GameTile = memo(({ id, num, select, open }) => {
    const matchedClass = open ? 'matched' : ''

    function getImageUrl(name) {
        return new URL(`../assets/${name}.png`, import.meta.url).href
      }

    return (
        <div
            className={'tile ' + `${matchedClass}`}
            onClick={() => select({ id, value: num })}
        >
            <img className='front_img' src={getImageUrl(num)} />
            <img className='back_img' src={getImageUrl(0)} />
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
