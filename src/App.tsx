import React from 'react'
import styles from './styles/App.module.css'
import Content from './components/Content'
import Nav from './components/Nav'
import Form from './components/Form'

const App: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <Nav />
            <Form />
        </div>
    )
}

export default App