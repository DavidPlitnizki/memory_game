import React, { Suspense, lazy, useEffect, useState } from 'react'

import Preloader from '../components/Preloader'
import { useStore } from '../hooks/store.hook'

const ResultUser = lazy(() => import('../components/Result/ResultUser'))

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
                <Suspense fallback={<Preloader />}>
                    {' '}
                    <ResultUser
                        results={results}
                        resetWinners={resetWinners}
                    />{' '}
                </Suspense>
            ) : (
                <Preloader />
            )}
        </React.Fragment>
    )
}
export default ResultPage
