import React from 'react'
import styles from '../styles/Nav.module.css'
import logo from '../assets/pochita.png'

const Nav: React.FC = () => {

    return (
        <nav className={styles.nav}>
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={styles.list}>
                <li className={styles.link} >Home</li>
                <li className={styles.link} >About</li>
                <li className={styles.link} >Contact</li>
            </ul>
        </nav>
    )
}

export default Nav