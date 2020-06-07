import React, {useState, useContext} from 'react';
import {Button} from 'react-bootstrap';
import RegistrationLogin from '../components/FormRegistration/RegistrationLogin.jsx';
import DropDown from '../components/FormRegistration/DropDown.jsx';
import styles from '../styles/styles.scss';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';

const LoginPage = props => {
    const {login,isAuthenticated} = useContext(AuthContext);
    const handleClose = () => false;
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [level, setLevel] = useState(0);
    const history = useHistory();

    const selectGameLevel =(level)=> {
        setLevel(level);
    }

    const setPlayerName =(name)=> {
        setName(name.trim());
    }

    const handleInputs =()=> {
        if(!name){
            setError('Enter Name!!!');
            return;
        }else if(!level){
            setError('Select Level!!!');
            return;
        }

        if(error.trim()){
            setError('');
        }
        
        history.push('/main');
        const userData = {userName: name, level};
        login(userData);

    }


    
    return(
       <div className={styles.login_wrapper}>
        <div className={styles.login_title}>
            <h2>NEW PLAYER</h2>
        </div>
        <section>
            <RegistrationLogin saveNameCB={setPlayerName} />
        </section>
        <section>
            <DropDown selectLevel={selectGameLevel} />
        </section>
        <section className={styles.login_error}>
            <h4>{error}</h4>
        </section>
        <div className={styles.login_btn}>
            <Button variant="primary" onClick={handleInputs} >Start Game</Button>
        </div>
       </div>

       
    )
}



export default LoginPage;