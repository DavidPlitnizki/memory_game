import React, { useState, useEffect, useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'

const DropDown = ({ selectLevel }) => {
    const [level, setLevel] = useState({ id: 0, difficult: '-' })
    const { userLevel } = useContext(AuthContext)

    useEffect(() => {
        selectedLevel(userLevel)
    }, [userLevel])

    const selectedLevel = useCallback((lev) => {
        if (!lev) return
        setLevel(lev)
        if (lev.id != 0) {
            selectLevel(lev)
        }
    }, [])

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {`difficult: ${level.difficult}`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => selectedLevel({ id: 1, difficult: 'EASY' })}
                >
                    EASY
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() =>
                        selectedLevel({ id: 2, difficult: 'NORMAL' })
                    }
                >
                    NORMAL
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => selectedLevel({ id: 3, difficult: 'HARD' })}
                >
                    HARD
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

DropDown.propTypes = {
    selectLevel: PropTypes.func.isRequired,
}

export default DropDown
