import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Home.module.css'
import logo from '../../assets/netflix.png'

export const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.hero__bg}>
        <div>
          <nav className={Styles.nav__container}>
            <span className={Styles.nav__span}><img src={logo} alt="logo" /></span>
            <div>
              <select className={Styles.nav__select}>
                <option value="/ar/" data-language="es">Español</option>
                <option value="/ar-en/" data-language="en">English</option>
              </select>
            </div>
            <Link className={Styles.nav__button} to={'/login'}>Iniciar sesión</Link>
          </nav>
          <div className={Styles.hero__bg_opacity}></div>
        </div>

      </div>

        {/* <div className={Styles.hero__card}>

          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloribus reprehenderit nostrum dolores magni quasi et adipisci natus assumenda, inventore saepe quis deleniti dolorum repudiandae nam tempora? Deleniti, praesentium unde.</div>
        </div> */}
    </div>
 )
}
