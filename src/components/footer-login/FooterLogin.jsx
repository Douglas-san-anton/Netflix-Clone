import React from 'react'
import Styles from './FooterLogin.module.css'

export const FooterLogin = () => {
  return (
    <div className={Styles.site__footer_wrapper}>
      {/* <div className={Styles.footer__divider}></div> */}
      <div className={Styles.site__footer}>
        <p className={Styles.footer__top}>{'¿Preguntas? Llama al '}
          <a className={Styles.footer__top_a} href="tel:0800 345 1593">0800 345 1593</a>
        </p>
        <ul className={Styles.footer__links}>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq">
              <span id="" data-uia="data-uia-footer-label">Preguntas frecuentes</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com" placeholder="footer_responsive_link_help">
              <span id="" data-uia="data-uia-footer-label">Centro de ayuda</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms">
              <span id="" data-uia="data-uia-footer-label">Términos de uso</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/privacy" >
              <span id="" data-uia="data-uia-footer-label">Privacidad</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="#">
              <span id="" data-uia="data-uia-footer-label">Preferencias de cookies</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/corpinfo">
              <span id="" data-uia="data-uia-footer-label">Información corporativa</span>
            </a>
          </li>
        </ul>
        <div className={Styles.lang__selection_container}>
          <div className={Styles.ui__select_wrapper}>
            <label className={Styles.ui__label}>
              <span className={Styles.ui__label_text}>Selecciona el idioma</span>
            </label>
            <div className={Styles.select__arrow}>
              <select className={Styles.ui__select} tabindex="0" placeholder="lang-switcher">
                <option selected="" lang="es" value="/ar/login" data-language="es" data-country="AR">Español</option>
                <option lang="en" value="/ar-en/login" data-language="en" data-country="AR">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
