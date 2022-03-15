import React, { createContext } from 'react'
import RegistrationLogin from './RegistrationLogin'
import { render, fireEvent } from '@testing-library/react'
import { customRender } from '../../utils/TestUtils'

describe('registration login component', () => {
    const mockCallback = jest.fn(() => console.log('mock was called'))

    test('render registration login component', () => {
        render(<RegistrationLogin saveNameCB={mockCallback} />)
    })
    test('enter new name', () => {
        const { getByRole } = render(
            <RegistrationLogin saveNameCB={mockCallback} />
        )
        const input = getByRole('textbox')

        expect(input.value).toBe('')

        fireEvent.change(input, { target: { value: 'David' } })

        expect(input.value).toBe('David')
    })

    test('render registration login component with logedIn user', () => {
        function noop() {}
        render(<RegistrationLogin saveNameCB={mockCallback} />)
    })

    test('render component with played user', () => {
        const providerProps = {
            userLevel: 1,
            userName: 'Andrew',
            login: () => {},
            isAuthinticated: true,
        }
        const { getByRole } = customRender(
            <RegistrationLogin saveNameCB={mockCallback} />,
            { providerProps }
        )
        const input = getByRole('textbox')

        expect(input.value).toBe('Andrew')
    })
})
