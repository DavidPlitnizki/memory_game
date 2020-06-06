import React from 'react';
import PropTypes from 'prop-types';
import Flag from '../../assets/flag.png';
import styles from '../../styles/styles.scss';

const ResultUser = ({results, resetWinners}) => {
    
    return(
        <>
            <table>
                <thead className={styles.result_container}>
                    <tr>
                        <th>level</th>
                        <th>Name</th>
                        <th></th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((res, i)=> {
                    return (
                        <tr key={i}>
                            <td width='30%'>{i+1}) {res.level.difficult}</td>
                            <td width='30%'>{res.name}</td>
                            <td width='10%'><img className={styles.flag} src={Flag} /></td>
                            <td width='40%'>{res.time}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className={styles.results_btn}>
                <button onClick={resetWinners} className="btn btn-danger">Reset List</button>
            </div>
        </>
    )
}

ResultUser.propTypes = {
    results: PropTypes.array.isRequired,
    resetWinners: PropTypes.func.isRequired
  }



export default ResultUser;