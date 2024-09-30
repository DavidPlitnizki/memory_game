import React, { useContext, useState, useCallback } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'
import DropDown from './FormRegistration/DropDown.jsx'
import RegistrationLogin from './FormRegistration/RegistrationLogin.jsx'

const PopupLogin = () => {
    const { login, isAuthenticated } = useContext(AuthContext)
    const handleClose = () => false
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const navigate = useNavigate()

    const selectGameLevel = useCallback((level) => {
        setLevel(level)
    }, [level]);

    const setPlayerName = useCallback((name) => {
        setName(name)
    }, [name]);

    const handleInputs = () => {
        if (!name) {
            alert('missing name!!!')
        } else if (!level) {
            alert('missing difficult')
        }

        navigate('/main')
        const userData = { userName: name, level }
        login(userData)
    }

    return (
        <Modal
            show={true}
            size="sm"
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>NEW PLAYER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RegistrationLogin saveNameCB={setPlayerName} />
                <DropDown selectLevel={selectGameLevel} />
            </Modal.Body>
            <Modal.Footer className='modal_footer'>
                <Button variant="primary" onClick={handleInputs}>
                    Start Game
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopupLogin
