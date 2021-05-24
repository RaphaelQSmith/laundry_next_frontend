import React from 'react'
import Header from '../components/header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import Login_form from '../components/loginform'
import Table from './table'
import Addstaff from '../components/addstaff'
import CreateRoster from '../components/createroster'

export default function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  )
}
