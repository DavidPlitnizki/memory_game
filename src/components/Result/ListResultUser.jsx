import React from 'react';
import ResultUser from './ResultUser.jsx';
import PropTypes from 'prop-types';
import styles from '../../styles/styles.scss';

const ListResultUser = ({user}) => {
    const default_user = {'userName':'default','time':'--:--:----','level':{'difficult':'----'}};


    return(
        <table>
            <thead>
                <tr>
                    <th>RESULTS:</th>
                </tr>
                <tr>
                    <th></th>
                    <th>level</th>
                    <th>Name</th>
                    <th>time</th>
                </tr>
            </thead>
            <tbody className={styles.results_tbody}>
                {(!user.length) ? <ResultUser result={default_user} /> : user.map((el, i)=>{return <ResultUser key={i} numeral={i} result={el} />})}
            </tbody>
        </table>
    )
}

ListResultUser.propTypes={
    user: PropTypes.array.isRequired
}

export default ListResultUser;