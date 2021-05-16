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
                <input style={{
                    width: '35%', 
                    height:'25px', 
                    fontSize: 15, 
                    backgroundColor: '#dfeae2' }} 
                    type="button" value="Login"/>
            </form>  
        </div>
    )
}
