import React from 'react'
import Styles from './Form.module.css'

export const Form = () => {
  return (
    <form className={Styles.hero__form}>
      <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
      <div className={Styles.hero__form_email}>

        <label className={Styles.hero__form_input}>
          <input autoComplete='Email' placeholder='Email' type="email" maxLength={50} minLength={5} />
        </label>

        <button className={Styles.hero__form_btn}>
          <span>Comenzar</span>
          <span>{'>'}</span>
        </button>

      </div>
    </form>
  )
}
