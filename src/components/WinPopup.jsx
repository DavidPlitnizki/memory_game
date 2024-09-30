import PropTypes from 'prop-types'
import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'

const WinPopup = memo(({ name, level, time, showWinPopup }) => {
    const [cls, setCls] = useState('')
    let navigate = useNavigate()
    useEffect(() => {
        setCls('open')
    }, [])

    const handleRestart = () => {
        showWinPopup(false)
    }

    const handleResult = () => {
        navigate('/result')
    }

    return (
        <div className={'container_winPopup ' + cls}>
            <h2>Winner</h2>
            <section className='user_info'>
                <h3>{name}</h3>
                <h6>{`Level: ${level}`}</h6>
            </section>
            <h3>{time}</h3>
            <section className='btn_wrapper'>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleRestart}
                >
                    Restart
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleResult}
                >
                    Results
                </button>
            </section>
        </div>
    )
});
WinPopup.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    showWinPopup: PropTypes.func.isRequired,
}

export default WinPopup
