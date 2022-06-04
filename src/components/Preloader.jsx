import React from 'react'

import preloaderImage from '../assets/preloader.svg'
import styles from '../styles/styles.scss'

const Preloader = () => (
    <div className={styles.preloader}>
        <img src={preloaderImage} />
    </div>
)

export default Preloader
