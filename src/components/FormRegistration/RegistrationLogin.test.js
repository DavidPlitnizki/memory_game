import React, {createContext} from 'react';
import RegistrationLogin from './RegistrationLogin';
import {render, fireEvent} from '@testing-library/react';
import {AuthContext} from '../../context/AuthContext';

// describe('testing registaration login', () => {})

describe('registration login component', ()=> {

    test('render registration login component', () => {
        const mockCallback = jest.fn(() => console.log('mock was called'));

        render(<RegistrationLogin saveNameCB={mockCallback} />);
    })
    test('enter new name', () => {        
        const mockCallback = jest.fn(() => console.log('mock was called'));
        const {getByRole} = render(<RegistrationLogin saveNameCB={mockCallback} />);
        const input = getByRole('textbox');

        expect(input.value).toBe('');

        fireEvent.change(input, {target: {value: 'David'}});

        expect(input.value).toBe('David');
    })

    test('render registration login component with logedIn user', () => {

        function noop(){};

        const AuthContext = createContext({
            level: 1,
            userName: 'David',
            login: noop,
            isAuthinticated: true
        });
        const mockCallback = jest.fn(() => console.log('mock was called'));

        const {debug} = render(
                <RegistrationLogin saveNameCB={mockCallback} />
        );

        // debug()
    })

    //helper must move to seperate file
    const customRender = (ui, {providerProps, ...renderOptions}) => {
        console.log("providerProps: ", providerProps)
        return render(
          <AuthContext.Provider value={{userLevel: providerProps.userLevel, userName:providerProps.userName, login: providerProps.login, isAuthenticated: true}}>{ui}</AuthContext.Provider>,
          renderOptions,
        )
      }

    test('render component with played user', () => {
    const mockCallback = jest.fn(() => console.log('mock was called'));
    const providerProps = {
        userLevel: 1,
        userName: 'Andrew',
        login: ()=>{},
        isAuthinticated: true
    }
    const {getByRole} = customRender(<RegistrationLogin saveNameCB={mockCallback} />, {providerProps})
    const input = getByRole('textbox');
        expect(input.value).toBe('Andrew');
    })
})