import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Preloader from '../components/Preloader'
import Timer from '../components/Timer'
import GameArea from '../containers/GameArea'
import { AuthContext } from '../context/AuthContext'
import { useStore } from '../hooks/store.hook'

const WinPopup = lazy(() => import('../components/WinPopup'))

const initialTiles = [
    { tile_num: 1, selected: false },
    { tile_num: 2, selected: false },
    { tile_num: 3, selected: false },
    { tile_num: 4, selected: false },
    { tile_num: 5, selected: false },
    { tile_num: 6, selected: false },
    { tile_num: 7, selected: false },
    { tile_num: 8, selected: false },
    { tile_num: 9, selected: false },
    { tile_num: 10, selected: false },
    { tile_num: 11, selected: false },
    { tile_num: 12, selected: false },
    { tile_num: 13, selected: false },
    { tile_num: 14, selected: false },
    { tile_num: 15, selected: false },
]

let playTime = '00:00'

const MainPage = () => {
    const { userName, userLevel } = useContext(AuthContext)

    /* Will be 3 states init play finish */
    const [gameStart, SetGameStart] = useState(false)
    const [gameTiles, setGameTiles] = useState([])
    const [winPopup, setWinPopup] = useState(false)
    const { setResult } = useStore()

    useEffect(() => {
        prepareGame()
    }, [])

    useEffect(() => {
        if (!winPopup) prepareGame()
    }, [winPopup])

    const prepareGame = () => {
        let tempTilesArr = [].concat(initialTiles)
        const tileslength = setTIlesByLevel(userLevel.id)

        const filtredTiles = fillGameTiles(tempTilesArr, tileslength)

        if (filtredTiles.length > 0) {
            setGameTiles(filtredTiles)
            SetGameStart(true)
        }
    }

    const showWinPopup = (bool) => {
        setWinPopup(bool)
    }

    const fillGameTiles = (tiles, tileslength) => {
        let fArr = []
        let sArr = []
        let filtredTiles = []

        while (tileslength) {
            let selectedTile = Math.floor(Math.random() * tileslength)

            /**random positions in arraies */
            const t1 = setRandomRageNumber(0, tileslength)
            const t2 = setRandomRageNumber(0, tileslength)

            /**fill arraies */
            fillDirectionArray(
                fArr,
                t1,
                {
                    tile_num: tiles[selectedTile].tile_num,
                    selected: tiles[selectedTile].selected,
                },
                'END'
            )
            fillDirectionArray(
                sArr,
                t2,
                {
                    tile_num: tiles[selectedTile].tile_num,
                    selected: tiles[selectedTile].selected,
                },
                'START'
            )

            //cut array
            tiles.splice(selectedTile, 1)

            tileslength--
        }

        filtredTiles = fArr.concat(sArr).filter((el) => el != null)
        return filtredTiles
    }

    const setRandomRageNumber = (startPoint, endPoint) => {
        return Math.floor(Math.random() * endPoint) + startPoint
    }

    const fillDirectionArray = (arr, index, data, dir) => {
        if (arr[index] && dir === 'END') {
            arr.push(data)
        } else if (arr[index] && dir === 'START') {
            arr.unshift(data)
        } else {
            arr[index] = data
        }
    }

    const setWinner = () => {
        SetGameStart(false)
        const player = {
            name: userName,
            level: userLevel,
            time: playTime,
        }
        setResult(player)
        showWinPopup(true)
    }

    const saveTime = (time) => {
        playTime = time
    }

    const setTIlesByLevel = (id) => {
        switch (id) {
            case 1:
                return 5
            case 2:
                return 10
            case 3:
                return 15
            default:
                return 5
        }
    }

    return (
        <React.Fragment>
            {winPopup ? (
                <Suspense fallback={<Preloader />}>
                    <WinPopup
                        name={userName}
                        level={userLevel.difficult}
                        time={playTime}
                        showWinPopup={showWinPopup}
                    />{' '}
                </Suspense>
            ) : (
                <Container>
                    <Row>
                        <Col>
                            {gameStart && (
                                <Timer
                                    startGame={gameStart}
                                    getTime={saveTime}
                                />
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {gameStart && (
                                <GameArea
                                    getSettings={gameTiles}
                                    getWinner={setWinner}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            )}
        </React.Fragment>
    )
}

export default MainPage
