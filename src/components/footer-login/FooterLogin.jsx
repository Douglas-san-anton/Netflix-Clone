import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './FooterLogin.module.css'

export const FooterLogin = () => {

  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState('en')
  const selectRef = useRef(null);

  const onChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const onClickSelect = () => {
    selectRef.current.click();
  };

  return (
    <div className={Styles.site__footer_wrapper}>
      <div className={Styles.site__footer}>
        <p className={Styles.footer__top}>{t('home.footer.header')}
          <a className={Styles.footer__top_a} href="tel:0800 345 1593">0800 345 1593</a>
        </p>
        <ul className={Styles.footer__links}>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq">
              <span id="" data-uia="data-uia-footer-label">{t('home.footer.frequent-questions')}</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com" placeholder="footer_responsive_link_help">
              <span id="" data-uia="data-uia-footer-label">{t('home.footer.help-center')}</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms">
              <span id="" data-uia="data-uia-footer-label">{t('home.footer.terms-of-use')}</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/privacy" >
              <span id="" data-uia="data-uia-footer-label">{t('home.footer.privacy')}</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="#">
              <span id="" data-uia="data-uia-footer-label">{t('home.footer.cookie-preferences')}</span>
            </a>
          </li>
          <li className={Styles.footer__link_item} >
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/corpinfo">
              <span id="" data-uia="data-uia-footer-label">{t('login.footer.corporate-information')}</span>
            </a>
          </li>
        </ul>
        <div className={Styles.lang__selection_container}>
          <div className={Styles.ui__select_wrapper}>
            <label className={Styles.ui__label}>
              <span className={Styles.ui__label_text}>{t('login.footer.select-the-language')}</span>
            </label>
            <div className={Styles.select__arrow}>
              <select value={language} onClick={onClickSelect} onChange={onChangeLanguage} ref={selectRef} className={Styles.ui__select} tabindex="0" placeholder="lang-switcher">
                <option value="es">{t('home.nav.select.es')}</option>
                <option value="en">{t('home.nav.select.en')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
