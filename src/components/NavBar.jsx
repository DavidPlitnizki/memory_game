import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <Navbar bg="dark" className="justify-content-end">
                        <ul className='nav_item'>
                            <li>
                                <NavLink to="login">New User</NavLink>
                            </li>
                            <li>
                                <NavLink to="game">Game</NavLink>
                            </li>
                            <li>
                                <NavLink to="result">Result</NavLink>
                            </li>
                        </ul>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar
