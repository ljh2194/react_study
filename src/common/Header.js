import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import '../css/common.css';
import styles from '../css/common.module.css'


const Header = () => {
  return (
    <>
        <Link to="/" className={styles.Box}><h1>메인으로</h1></Link>
    </>
  )
}

export default Header