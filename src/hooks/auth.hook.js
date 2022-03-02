import { useState, useCallback, useEffect } from 'react'

const storageUser = 'userData'

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(null)
    const [playerName, setPlayerName] = useState('')
    const [playerLevel, setPlayerLevel] = useState(null)

    const login = useCallback(({ userName, level }) => {
        sessionStorage.clear()
        setIsAuth(true)
        setPlayerLevel(level)
        setPlayerName(userName)
        sessionStorage.setItem(
            storageUser,
            JSON.stringify({
                userName,
                level,
            })
        )
    }, [])

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem(storageUser))
        if (!!user) login(user)
    }, [login])

    return { login, isAuth, playerName, playerLevel }
}
