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

        <div className={Styles.footer__select_container}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
          </svg>

          <select value={language} onClick={onClickSelect} onChange={onChangeLanguage} ref={selectRef} className={Styles.footer__select_lang}>
            <option value="es">{t('home.nav.select.es')}</option>
            <option value="en">{t('home.nav.select.en')}</option>
          </select>

        </div>
        <p>Netflix Argentina</p>
      </div>


    </footer>
  )
}
