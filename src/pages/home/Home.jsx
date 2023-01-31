import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Home.module.css'
import logo from '../../assets/netflix.png'

export const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.hero__bg}>

          <nav className={Styles.nav__container}>
            <span className={Styles.nav__span}><img src={logo} alt="logo" /></span>
            <div>
              <select className={Styles.nav__select}>
                <option value="/ar/" data-language="es">Español</option>
                <option value="/ar-en/" data-language="en">English</option>
              </select>
              <Link className={Styles.nav__button} to={'/login'}>Iniciar sesión</Link>
            </div>
          </nav>
          <div className={Styles.hero__bg_opacity}></div>

          <div className={Styles.hero__card}>
            <h1>Películas y series ilimitadas y mucho más</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>

            <form className={Styles.hero__form}>
              <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
              <div className={Styles.hero__form_email}>

                <label className={Styles.hero__form_input}>
                  <input placeholder='Email' type="text" />
                </label>

                <button className={Styles.hero__form_btn}>
                  <span>Comenzar</span>
                  <span>{'>'}</span>
                </button>

              </div>
            </form>
          </div>

      </div>
    </div>
 )
}
