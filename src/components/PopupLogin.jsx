import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import RegistrationLogin from './FormRegistration/RegistrationLogin.jsx';
import DropDown from './FormRegistration/DropDown.jsx';
import PropTypes from 'prop-types';
import styles from '../styles/styles.scss';

const PopupLogin = props => {
    const handleClose = () => false;
    let curr_name = null;
    let curr_level = null;

    const selectLevel =(level)=>{
        curr_level = level;
    }

    const getName =(name)=>{
        curr_name = name;
    }

    const checkInputData =()=>{
        if(!curr_name){
            alert('missing name!!!');
        }else if(!curr_level){
            alert('missing difficult');
        }else{
            props.setGame({'userName':curr_name, 'level':curr_level});
        }
    }


    
    return(
        <Modal show={props.show} size="sm" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header>
            <Modal.Title>NEW PLAYER</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <RegistrationLogin saveNameCB={getName} />
                <DropDown selectLevel={selectLevel} />
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button variant="primary" onClick={checkInputData} >Start Game</Button>
            </Modal.Footer>
        </Modal>
    )
}

PopupLogin.propTypes = {
    setGame: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

PopupLogin.defaultProps = {
    show: true
}

export default PopupLogin;