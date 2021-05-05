import React from 'react'
import styles from './components.module.scss'

export default function header() {
    return (
        <div>
            <header className={styles.header}>
                <h1>Online Roster</h1>
            </header>
        </div>
    )
}
