import React, { useRef, useState } from 'react'
import Styles from './Footer.module.css'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
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
    <footer className={Styles.footer__container}>
      <div className={Styles.footer__site}>
        <p className={Styles.footer__top}>{t('home.footer.header')}
          <a href="tel:0800 345 1593">0800 345 1593</a>
        </p>
        <ul className={Styles.footer__links}>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/support/412">
              <span>{t('home.footer.frequent-questions')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com">
              <span>{t('home.footer.help-center')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="/youraccount">
              <span>{t('home.footer.account')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://media.netflix.com/">
              <span>{t('home.footer.press')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="http://ir.netflix.com/">
              <span>{t('home.footer.investor-relations')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://jobs.netflix.com/jobs">
              <span>{t('home.footer.employment')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="/watch">
              <span>{t('home.footer.ways-of-seeing')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/termsofuse">
              <span>{t('home.footer.terms-of-use')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/privacy">
              <span>{t('home.footer.privacy')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="#">
              <span>{t('home.footer.cookie-preferences')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/corpinfo">
              <span>{t('home.footer.corporate-information')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/contactus">
              <span>{t('home.footer.contact-us')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://fast.com">
              <span>{t('home.footer.speed-test')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://help.netflix.com/legal/notices">
              <span>{t('home.footer.legal-notices')}</span>
            </a>
          </li>
          <li className={Styles.footer__links_item}>
            <a className={Styles.footer__link} href="https://www.netflix.com/ar/browse/genre/839338">
              <span>{t('home.footer.only-on-netflix')}</span>
            </a>
          </li>
        </ul>
        <select value={language} onClick={onClickSelect} onChange={onChangeLanguage} ref={selectRef} className={Styles.footer__select_lang}>
          <option value="es">{t('home.nav.select.es')}</option>
          <option value="en">{t('home.nav.select.en')}</option>
        </select>
        <p>Netflix Argentina</p>
      </div>


    </footer>
  )
}
