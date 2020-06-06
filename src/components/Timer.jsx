import React,{useState,useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';

const Timer = ({startGame, getTime}) => {
    
    const [time, setTime] = useState(0);

    useEffect(()=>{
        let timer = null;
        if(startGame){
          timer = debounce(tick,1);
        }
        else if(!startGame){
            getTime(convertTime());
        }
        return (()=> {
            getTime(convertTime());
            clearTimeout(timer)
        })
    },[time]);

    const debounce = useCallback((fn, delay)=> {
        const timer = setTimeout(()=> {
            fn();
        },delay);  
        return timer;
    });


    const tick =()=> {
        setTime(time + 1);
    }

    const convertTime =()=> {
        let m, s, ms = 0;
        ms = time % 1000;
        s = Math.floor((time / 1000) % 60);
        m = Math.floor(((time / 1000) / 60) % 60);
      return  ('00' + m).slice(-2) + " : " + ('00' + s).slice(-2) + " : " + ('0000' + ms).slice(-4);
    }
    

    return(
        <header className={styles.timer_wrapper}>
            <span className={styles.timer_value}>{convertTime()}</span>
        </header>
    )
}


Timer.propTypes = {
    getTime: PropTypes.func.isRequired,
    startGame: PropTypes.bool.isRequired
}

Timer.defaultProps = {
    startGame: true
}

export default Timer;