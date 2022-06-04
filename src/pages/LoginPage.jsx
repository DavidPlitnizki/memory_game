import React, { useCallback, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import DropDown from '../components/FormRegistration/DropDown.jsx'
import RegistrationLogin from '../components/FormRegistration/RegistrationLogin.jsx'
import { AuthContext } from '../context/AuthContext'
import styles from '../styles/styles.scss'

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [level, setLevel] = useState(0)
    const history = useHistory()

    const selectGameLevel = useCallback((level) => {
        setLevel(level)
    }, [level]);

    const setPlayerName = useCallback((name) => {
        setName(name.trim())
    }, [name]);

    const handleInputs = () => {
        if (!name) {
            setError('Enter Name!!!')
            return
        } else if (!level) {
            setError('Select Level!!!')
            return
        }

        if (error.trim()) {
            setError('')
        }

        history.push('/main')
        const userData = { userName: name, level }
        login(userData)
    }

    return (
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
                <Button variant="primary" onClick={handleInputs}>
                    Start Game
                </Button>
            </div>
        </div>
    )
}

export default LoginPage
