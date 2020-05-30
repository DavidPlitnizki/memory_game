import React from 'react';
import Flag from '../../assets/flag.png';
import styles from '../../styles/styles.scss';

const ResultUser = ({results}) => {
    return(
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
    )
}



export default ResultUser;