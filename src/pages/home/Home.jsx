import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={Styles.container}>
      <nav className={Styles.nav__container}>
        <span></span>
        <div></div>
        <Link to={'/login'}>Iniciar sesión</Link>
      </nav>
    </div>
 )
}
