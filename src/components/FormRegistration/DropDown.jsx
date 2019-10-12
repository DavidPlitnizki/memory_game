import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'react-bootstrap';

const DropDown = props => {
   const [level, setLevel] = useState({id:0, 'difficult':'-'});

    const selectedLevel =(lev)=>{
        setLevel(lev);
        if(lev.id != 0){
            props.selectLevel(lev);
        }
    }

    return(
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {`difficult: ${level.difficult}`}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>selectedLevel({id:1, 'difficult':'EASY'})} >EASY</Dropdown.Item>
            <Dropdown.Item onClick={()=>selectedLevel({id:2, 'difficult':'NORMAL'})} >NORMAL</Dropdown.Item>
            <Dropdown.Item onClick={()=>selectedLevel({id:3, 'difficult':'HARD'})} >HARD</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
}

DropDown.propTypes = {
    selectLevel: PropTypes.func.isRequired
}

export default DropDown;
