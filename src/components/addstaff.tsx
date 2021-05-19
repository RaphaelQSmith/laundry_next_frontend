import React from 'react'
import styles from './components.module.scss'

export default function addstaff() {
    return (
        <div className={styles.addStaff}>
            <form action="POST">
                <input type="text" placeholder="Name"/>
                <input type="email" id="" placeholder="Email"/>
                <input type="password" name="" id="" placeholder="Password"/>
                <input type="button" value="Add"/>
            </form>
        </div>
    )
}
