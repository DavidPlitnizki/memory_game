import React, {useState, useEffect, useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import {AuthContext} from '../../context/AuthContext';


const RegistrationLogin = ({saveNameCB}) => {
  const {userName} = useContext(AuthContext);
  const [name, setName] = useState(userName || '');

    // useEffect(()=> {
    //   setChar(userName);
    // },[userName]);

    const setChar = useCallback((name)=>{
      setName(name);
      saveNameCB(name);
    },[])

    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setChar(e.currentTarget.value)} value={name} />
        </Form.Group>
      </Form>
    )
}

RegistrationLogin.propTypes = {
  saveNameCB: PropTypes.func.isRequired
}

export default RegistrationLogin;