import React from 'react'
import styles from './App.module.css'
import Content from './components/Content'
import Nav from './components/Nav'

const App: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <Nav />
            <Content />
        </div>
    )
}

export default App