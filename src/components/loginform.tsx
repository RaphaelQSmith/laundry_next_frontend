import styles from './components.module.scss'

export default function loginform() {
    return (
        <div className={styles.login}>
            <form action="/">
                <input id='email' placeholder="Email" type="email"/>
                <input id='password' placeholder="Password" type="password"/>
                <input style={{
                    width: '13%', 
                    height:'30px', 
                    fontSize: 15, 
                    backgroundColor: '#dfeae2' }} 
                    type="button" value="Login"/>
            </form>  
        </div>
    )
}
