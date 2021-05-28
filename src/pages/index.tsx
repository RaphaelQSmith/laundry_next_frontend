import styles from '../components/components.module.scss'
import Loginform from './roster/loginform'

export default function index() {
    return (
        <div className={styles.homeContainer}>
            <h2>Welcome to the Online Laundry Roster System</h2>
            <Loginform />            
        </div>
    )
}
