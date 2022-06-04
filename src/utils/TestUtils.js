import { render } from '@testing-library/react'
import React from 'react'

import { AuthContext } from '../context/AuthContext'

export const customRender = (ui, { providerProps, ...renderOptions }) => {
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
