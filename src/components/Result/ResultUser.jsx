import React from 'react';
import Flag from '../../assets/flag.png';
import styles from '../../styles/styles.scss';

const ResultUser = ({result}) => {
    return(
        <React.Fragment>
            <tr>
                <td><img className={styles.flag} src={Flag} /></td>
                <td width='22%'>{result.level.difficult}</td>
                <td width='50%'>{result.userName}</td>
                <td width='28%'>{result.time}</td>
            </tr>
        </React.Fragment>
    )
}

export default ResultUser;