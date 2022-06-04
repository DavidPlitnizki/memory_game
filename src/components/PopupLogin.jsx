import React, { useContext, useState, useCallback } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'
import styles from '../styles/styles.scss'
import DropDown from './FormRegistration/DropDown.jsx'
import RegistrationLogin from './FormRegistration/RegistrationLogin.jsx'

const PopupLogin = () => {
    const { login, isAuthenticated } = useContext(AuthContext)
    const handleClose = () => false
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const history = useHistory()

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

        history.push('/main')
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
            <Modal.Footer className={styles.modalFooter}>
                <Button variant="primary" onClick={handleInputs}>
                    Start Game
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopupLogin
