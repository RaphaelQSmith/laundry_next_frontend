import React from 'react'
import styles from './components.module.scss'

export default function login_form() {
    return (
        <div className={styles.login}>
            <form action="/">
                <p>Email </p>
                <input id='email' type="email"/>
                <p>Password</p>
                <input id='password' type="password"/>
            </form>
        </div>
    )
}
