import styles from '../../components/components.module.scss'

var time = new Date()
var today = time.getFullYear() + "/" + (time.getMonth()+1) + "/" + time.getDate() 
export default function table() {
    return (
        <div>
            <h3>{today}</h3>
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
        </div>
    )
}
