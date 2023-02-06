import React from 'react'
import Styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={Styles.footer__container}>
      <div className={Styles.footer__site}>
        <p className={Styles.footer__top}>{'¿Preguntas? Llama al '}
          <a href="tel:0800 345 1593">0800 345 1593</a>
        </p>
        <ul className={Styles.footer__links}>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/support/412">
              <span>Preguntas frecuentes</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com">
              <span>Centro de ayuda</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="/youraccount">
              <span>Cuenta</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://media.netflix.com/">
              <span>Prensa</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="http://ir.netflix.com/">
              <span>Relaciones con inversionistas</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://jobs.netflix.com/jobs">
              <span>Empleo</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="/watch">
              <span>Formas de ver</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/termsofuse">
              <span>Términos de uso</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/privacy">
              <span>Privacidad</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="#">
              <span>Preferencias de cookies</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/corpinfo">
              <span>Información corporativa</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/contactus">
              <span>Contáctanos</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://fast.com">
              <span>Prueba de velocidad</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/notices">
              <span>Avisos legales</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://www.netflix.com/ar/browse/genre/839338">
              <span>Solo en Netflix</span>
            </a>
          </li>
        </ul>
        <select className={Styles.footer__select_lang}>
          <option value="/ar/" data-language="es">Español</option>
          <option value="/ar-en/" data-language="en">English</option>
        </select>
        <p>Netflix Argentina</p>
      </div>


    </footer>
  )
}
