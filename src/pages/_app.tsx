import React from 'react'
import Header from '../components/header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import Login_form from '../components/login_form'

export default function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Login_form />
      </main>
    </div>
  )
}
