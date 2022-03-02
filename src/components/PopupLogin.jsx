import React, { useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import RegistrationLogin from './FormRegistration/RegistrationLogin.jsx'
import DropDown from './FormRegistration/DropDown.jsx'
import { useAuth } from '../hooks/auth.hook'
import styles from '../styles/styles.scss'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const PopupLogin = (props) => {
    const { login, isAuthenticated } = useContext(AuthContext)
    const handleClose = () => false
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const history = useHistory()

    const selectGameLevel = (level) => {
        setLevel(level)
    }

    const setPlayerName = (name) => {
        setName(name)
    }

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
