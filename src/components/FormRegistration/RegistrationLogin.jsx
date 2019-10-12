import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';

const RegistrationLogin = props => {

    const inputEl = useRef(null);

    const setChar=(e)=>{
       props.saveNameCB(inputEl.current.value);
    }

    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter name" ref={inputEl} onChange={setChar} />
        </Form.Group>
      </Form>
    )
}

RegistrationLogin.propTypes = {
  saveNameCB: PropTypes.func.isRequired
}

export default RegistrationLogin;