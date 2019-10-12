import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';

const Timer = props => {
    const [time, setTime] = useState(0);
    const [clock, setClock] = useState('00:00:0000');
  

    useEffect(()=>{
        let cur_timer;
        if(props.startGame){
          cur_timer = setInterval(()=>{tick()},1);
        }
        else if(props.startGame === false && props.runTimer){
            props.getTime(clock);
        }
        return ()=>{
            clearInterval(cur_timer);
        }
    });


    function tick(){
        let tmp_time = convertTime();
        setTime(time + 1);
        setClock(tmp_time);
    }

    function convertTime(){
        let m, s, ms = 0;
        ms = time % 1000;
        s = Math.floor((time / 1000) % 60);
        m = Math.floor(((time / 1000) / 60) % 60);
      return  ('00' + m).slice(-2) + " : " + ('00' + s).slice(-2) + " : " + ('0000' + ms).slice(-4);
    }
    

    return(
        <header className={styles.timer_wrapper}>
            <span className={styles.timer_value}>{clock}</span>
        </header>
    )
}


Timer.propTypes = {
    getTime: PropTypes.func.isRequired,
    runTimer: PropTypes.bool.isRequired,
    startGame: PropTypes.bool
}

Timer.defaultProps = {
    startGame: null
}

export default Timer;