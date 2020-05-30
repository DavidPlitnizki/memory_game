import React, {useEffect,useState} from 'react';
import ResultUser from '../components/Result/ResultUser';
import Preloader from '../components/Preloader';
import {useStore} from '../hooks/store.hook';

const ResultPage = () => {
    const {getResult} = useStore();
    const [results, setResults] = useState([])

    useEffect(()=> {
        const results = getResult();
        if(results) sortResultsByInc(results);
    },[]);

    const sortResultsByInc =(results)=> {
        const res = results.sort((a, b) => (a.time < b.time) ? -1 : 1);
        setResults(res);
    }
    
    return (
        
        <React.Fragment>
        {results.length > 0 ? <ResultUser results={results} /> :<Preloader />}
        </React.Fragment>
    )
}
export default ResultPage;