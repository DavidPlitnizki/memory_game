import React, { useEffect, useState } from 'react'

import Preloader from '../components/Preloader'
import { useStore } from '../hooks/store.hook'
import ResultUser from '../components/Result/ResultUser'

const ResultPage = () => {
    const { getResult, resetList } = useStore()
    const [results, setResults] = useState([])

    useEffect(() => {
        const results = getResult()
        if (results) sortResultsByInc(results)
    }, [])

    const resetWinners = () => {
        resetList()
        setResults([])
    }

    const sortResultsByInc = (results) => {
        const res = results.sort((a, b) => (a.time < b.time ? -1 : 1))
        setResults(res)
    }

    return (
        <React.Fragment>
            {results.length > 0 ? (
                    <ResultUser
                        results={results}
                        resetWinners={resetWinners}
                    />
            ) : (
                <Preloader />
            )}
        </React.Fragment>
    )
}
export default ResultPage
