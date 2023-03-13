import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Login.module.css'
import bg from '../../assets/bg-login.jpg'
import logo from '../../assets/netflix.png'
import { FooterLogin } from '../../components/footer-login/FooterLogin'
import { useTranslation } from 'react-i18next'

export const Login = () => {

  const { t } = useTranslation()

  return (
    <div className={Styles.login__wrapper}>
      <div className={Styles.login__bg}>
        <div className={Styles.login__wrapper_bg}>
          <img className={Styles.login__wrapper_img} src={bg} alt="" />
        </div>
        <div className={Styles.login__header}>
          <Link to={'/home'} className={Styles.login__logo}><img src={logo} alt="" /></Link>
        </div>

        <div className={Styles.login__body}>
          <div className={Styles.login__content}>
            <div className={Styles.login__form_main}>
              <h1>{t('login.main.title')}</h1>

              <form className={Styles.form__container} method='post'>
                <form className={Styles.form}>
                  <input type="text" maxLength={50} required />
                  <label className={Styles.hero__form_label}>
                    <span className={Styles.hero__form_span}>
                      {t('login.main.email')}
                    </span>
                  </label>
                </form>

                <form className={Styles.form}>
                  <input type="password" maxLength={50} required />
                  <label className={Styles.hero__form_label}>
                    <span className={Styles.hero__form_span}>
                      {t('login.main.password')}
                    </span>
                  </label>
                </form>

                <button className={Styles.login__btn}>
                  <Link className={Styles.login__btn_link} to={'/browse'}>{t('login.main.btn-link')}</Link>
                </button>
                <div className={Styles.login__help}>
                  <div className={Styles.login__remember_me}>
                    <input type="checkbox" />
                    <label>
                      <span className={Styles.login__remember_me_span}>{t('login.main.remember-me')}</span>
                    </label>
                  </div>
                  <a className={Styles.login__help_link} target="_self" href="/LoginHelp">{t('login.main.help')}</a>
                </div>
              </form>
            </div>

            <div className={Styles.login__form_other}>
              <div className={Styles.login__signup_now}>
                {t('login.main.first-time')}
                <a target="_self" href="/">{t('login.main.subscribe-now')}</a>
                {'.'}
              </div>
              <div className={Styles.login__recaptcha}>
                <p>
                  <span>{t('login.main.span')}</span>
                  &nbsp;
                  <button className={Styles.login__recaptcha_btn}>{t('login.main.more-info')}</button>
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
