import React from 'react'
import { Form } from '../form/Form'
import Styles from './Faq.module.css'
import { useTranslation } from 'react-i18next'

export const Faq = () => {
  const { t } = useTranslation()

  return (
    <section className={Styles.faq}>
      <div className={Styles.faq__container}>
        <h1>{t('home.faq.title')}</h1>
        <ul className={Styles.faq__ul}>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q1" />
            <label className={Styles.faq__question} for="q1">
              {t('home.faq.what-is-netflix')}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              {t('home.faq.what-is-netflix-answer1')}
              <br />
              <br />
              {t('home.faq.what-is-netflix-answer1')}
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q2" />
            <label className={Styles.faq__question} for="q2">
              {t('home.faq.how-much.title')}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              {t('home.faq.how-much.answer')}
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q3" />
            <label className={Styles.faq__question} for="q3">
              {t('home.faq.where.title')}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              {t('home.faq.where.answer1')}
              <br />
              <br />
              {t('home.faq.where.answer2')}
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q4" />
            <label className={Styles.faq__question} for="q4">
              {t('home.faq.how-do.title')}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              {t('home.faq.how-do.answer')}
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q5" />
            <label className={Styles.faq__question} for="q5">
              {t('home.faq.what-can-i.title')}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              {t('home.faq.what-can-i.answer')}
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q6" />
            <label className={Styles.faq__question} for="q6">
              {t('home.faq.is-netflix-good.title')}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              {t('home.faq.is-netflix-good.answer1')}
              <br />
              <br />
              {t('home.faq.is-netflix-good.answer2')}
            </div>
          </li>

        </ul>

        <Form />
      </div>
    </section>
  )
}
