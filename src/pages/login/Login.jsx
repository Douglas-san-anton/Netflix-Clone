import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Login.module.css'
import bg from '../../assets/bg.jpg'
import logo from '../../assets/netflix.png'

export const Login = () => {
  return (
    <div className={Styles.login__wrapper}>
      <div className={Styles.login__wrapper_bg}>
        <img className={Styles.login__wrapper_img} src={bg} alt="" />
      </div>
      <div className={Styles.login__header}>
        <Link to={'/'} className={Styles.login__logo}><img src={logo} alt="" /></Link>
      </div>

      <div className={Styles.login__body}>
        <div className={Styles.login__content}>
          <div className={Styles.login__form_main}>
            <h1>Inicia sesión</h1>
            <form method='post'>
              <div className={Styles.login__form_container}>
                <label className={Styles.login__label_container}>
                  <input type="text" />
                  <label>Email o número de teléfono</label>
                </label>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
