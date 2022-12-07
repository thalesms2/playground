import React from 'react'
import styles from '../styles/Content.module.css'

const Content: React.FC = () => {

    return (
        <div>
            <div className={styles.knife}>
                <div className={styles.hole} />
                <div className={styles.handle} />
                <div className={styles.blade} />
            </div>
        </div>
    )
}

export default Content