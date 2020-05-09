import {useState, useCallback, useEffect} from 'react';


const storageUser = 'userData';

export const useAuth = () => {

    const [isAuth, setIsAuth] = useState();

    const login = useCallback((name)=> {

        setIsAuth(true);
        sessionStorage.setItem(storageUser, JSON.stringify({
            user: name
        }))
    },[])

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem(storageUser));
            setIsAuth(!!user);
    },[])

    return {login, isAuth};
}