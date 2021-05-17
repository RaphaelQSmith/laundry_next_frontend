import React from 'react'
import styles from './components.module.scss'

export default function table() {
    return (
        <div className={styles.tableHead}>
            <table>
                <thead>
                    <th></th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Morning</td>
                        <td>Daniele</td>
                        <td>Daniele</td>
                        <td>Daniele</td>
                        <td>Daniele</td>
                        <td>Daniele</td>
                        <td>Daniele</td>
                        <td>Daniele</td>
                    </tr>
                    <tr>
                        <td>Evening</td>
                        <td>Francisca</td>
                        <td>Francisca</td>
                        <td>Francisca</td>
                        <td>Francisca</td>
                        <td>Francisca</td>
                        <td>Francisca</td>
                        <td>Francisca</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
