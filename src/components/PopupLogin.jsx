import React, {useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import RegistrationLogin from './FormRegistration/RegistrationLogin.jsx';
import DropDown from './FormRegistration/DropDown.jsx';

const PopupLogin = props => {
    const handleClose = () => false;
    const [name, setName] = useState('');
    const [level, setLevel] = useState(0);

    const selectGameLevel =(level)=> {
        setLevel(level);
    }

    const setPlayerName =(name)=> {
        setName(name);
    }

    const handleInputs =()=> {
        if(!name){
            alert('missing name!!!');
        }else if(!level){
            alert('missing difficult');
        }
        
        //1) login
        //2) redirect to game 

    }


    
    return(
        <Modal show={true} size="sm" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header>
            <Modal.Title>NEW PLAYER</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <RegistrationLogin saveNameCB={setPlayerName} />
                <DropDown selectLevel={selectGameLevel} />
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button variant="primary" onClick={handleInputs} >Start Game</Button>
            </Modal.Footer>
        </Modal>
    )
}


// props.setGame({'userName':curr_name, 'level':curr_level});


export default PopupLogin;