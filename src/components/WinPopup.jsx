import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';

const WinPopup =({name, level, time, showWinPopup})=> {
    const [cls, setCls] = useState('');
    let history = useHistory();
    useEffect(()=> {
        setCls(`${styles.open}`);
    },[])

    const handleRestart =()=> {
        showWinPopup(false);
    }

    const handleResult=()=> {
        history.push("/result");
    }

    return (
        <div className={styles.container_winPopup + " " + cls}>
            <h2>Winner</h2>
            <section className={styles.user_info}>
                <h3>{name}</h3>
                <h6>{`Level: ${level}`}</h6>
            </section>
            <h3>
                {time}
            </h3>
            <section className={styles.btn_wrapper}>
                <button type="button" className="btn btn-success" onClick={handleRestart}>Restart</button>
                <button type="button" className="btn btn-primary" onClick={handleResult}>Results</button>
            </section>
        </div>
    )
}

WinPopup.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    showWinPopup: PropTypes.func.isRequired
}

export default WinPopup;