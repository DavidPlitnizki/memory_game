import React, { useCallback, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import DropDown from '../components/FormRegistration/DropDown.jsx'
import RegistrationLogin from '../components/FormRegistration/RegistrationLogin.jsx'
import { AuthContext } from '../context/AuthContext'
import NavBar from '../components/NavBar.jsx'

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [level, setLevel] = useState(0)
    const navigate = useNavigate();

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

        
        const userData = { userName: name, level }
        login(userData)
        navigate('/main');
    }

    return (
        <>
        <NavBar />
        
        <div className='login_wrapper'>
            <div className='login_title'>
                <h2>NEW PLAYER</h2>
            </div>
            <section>
                <RegistrationLogin saveNameCB={setPlayerName} />
            </section>
            <section>
                <DropDown selectLevel={selectGameLevel} />
            </section>
            <section className='login_error'>
                <h4>{error}</h4>
            </section>
            <div className='login_btn'>
                <Button variant="primary" onClick={handleInputs}>
                    Start Game
                </Button>
            </div>
        </div>
        </>
    )
}

export default LoginPage
