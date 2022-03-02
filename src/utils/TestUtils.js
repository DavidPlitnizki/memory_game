import React from 'react'
import { render } from '@testing-library/react'
import { AuthContext } from '../context/AuthContext'

export const customRender = (ui, { providerProps, ...renderOptions }) => {
    console.log('providerProps: ', providerProps)
    return render(
        <AuthContext.Provider
            value={{
                userLevel: providerProps.userLevel,
                userName: providerProps.userName,
                login: providerProps.login,
                isAuthenticated: true,
            }}
        >
            {ui}
        </AuthContext.Provider>,
        renderOptions
    )
}
