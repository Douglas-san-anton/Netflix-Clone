import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Login.module.css'
import bg from '../../assets/bg-login.jpg'
import logo from '../../assets/netflix.png'
import { FooterLogin } from '../../components/footer-login/FooterLogin'

export const Login = () => {
  return (
    <div className={Styles.login__wrapper}>
      <div className={Styles.login__bg}>
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

                <div className={Styles.login__form_container}>
                  <label className={Styles.login__label_container}>
                    <input type="password" />
                    <label>Contraseña</label>
                  </label>
                </div>


                <button className={Styles.login__btn}>
                  <Link className={Styles.login__btn_link} to={'/browse'}>Iniciar sesión</Link>
                </button>
                <div className={Styles.login__help}>
                  <div className={Styles.login__remember_me}>
                    <input type="checkbox" />
                    <label>
                      <span className={Styles.login__remember_me_span}>Recuérdame</span>
                    </label>
                  </div>
                  <a className={Styles.login__help_link} target="_self" href="/LoginHelp">¿Necesitas ayuda?</a>
                </div>
              </form>
            </div>

            <div className={Styles.login__form_other}>
              <div className={Styles.login__signup_now}>
              {'¿Primera vez en Netflix? '}
              <a target="_self" href="/">Suscríbete ahora</a>
              {'.'}
              </div>
              <div className={Styles.login__recaptcha}>
                <p>
                  <span>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.</span>
                  &nbsp;
                  <button className={Styles.login__recaptcha_btn}>Más info.</button>
                </p>
              </div>
              <div className={Styles.login__recaptcha_span}></div>
            </div>

          </div>
        </div>

        <FooterLogin />
      </div>
    </div>
  )
}
