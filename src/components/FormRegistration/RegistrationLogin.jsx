import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';

const RegistrationLogin = props => {

    const setChar=(e)=>{
       props.saveNameCB(e.currentTarget.value);
    }

    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control type="text" onChange={setChar} />
        </Form.Group>
      </Form>
    )
}

RegistrationLogin.propTypes = {
  saveNameCB: PropTypes.func.isRequired
}

export default RegistrationLogin;