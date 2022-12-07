import React from 'react'
import styles from '../styles/Form.module.css'
const Form: React.FC = () => {

    return (
        <form>
            <div className={styles.wrapper}>
                <input type="email" name="email" id="email" className={styles.input} />
                <input type="password" name="password" id="password" className={styles.input}/>
                <input type="submit" value="submit" className={styles.button} />
            </div>
        </form>
    )
}

export default Form