import React from 'react'
import Styles from './Form.module.css'
import { useTranslation } from 'react-i18next'

export const Form = () => {
  const { t, i18n } = useTranslation()

  return (
    <form className={Styles.hero__form}>
      <h3>{t('home.form.title')}</h3>
      <div className={Styles.hero__form_email}>

        <form className={Styles.form}>
          <input maxLength={50} minLength={5} required />
          <label className={Styles.hero__form_label}>
            <span className={Styles.hero__form_span}>
              Email
            </span>
          </label>
        </form>

        <button className={Styles.hero__form_btn}>
          <span>{t('home.form.btn')}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"></path>
          </svg>
        </button>

      </div>
    </form>
  )
}
