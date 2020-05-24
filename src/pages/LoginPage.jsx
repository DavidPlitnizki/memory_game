import React, {useState, useContext} from 'react';
import {Modal,Button, Form, Row, Col} from 'react-bootstrap';
import RegistrationLogin from '../components/FormRegistration/RegistrationLogin.jsx';
import DropDown from '../components/FormRegistration/DropDown.jsx';
import {useAuth} from '../hooks/auth.hook';
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
            setError('Select Level');
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

        // <Modal show={true} size="sm" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered >
        // <Modal.Header>
        //     <Modal.Title>NEW PLAYER</Modal.Title>
        // </Modal.Header>
        //     <Modal.Body>
        //         <RegistrationLogin saveNameCB={setPlayerName} />
        //         <DropDown selectLevel={selectGameLevel} />
        //     </Modal.Body>
        //     <Modal.Footer className={styles.modalFooter}>
        //         <Button variant="primary" onClick={handleInputs} >Start Game</Button>
        //     </Modal.Footer>
        // </Modal>
    )
}


// props.setGame({'userName':curr_name, 'level':curr_level});


export default LoginPage;