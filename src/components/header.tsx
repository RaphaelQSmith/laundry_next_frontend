import React from 'react'
import styles from './components.module.scss'

export default function header() {
    return (
        <div>
            <header className={styles.header}>
                <h1><a href="/">Online Roster</a></h1>
            </header>
        </div>
    )
}
