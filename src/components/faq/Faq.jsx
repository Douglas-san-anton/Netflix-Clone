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
              Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
              <br />
              <br />
              Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q2" />
            <label className={Styles.faq__question} for="q2">
              {"¿Cuánto cuesta Netflix?"}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 699 hasta $ 1.899 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q3" />
            <label className={Styles.faq__question} for="q3">
              {"¿Dónde puedo ver Netflix?"}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.
              <br />
              <br />
              Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q4" />
            <label className={Styles.faq__question} for="q4">
              {"¿Cómo cancelo?"}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q5" />
            <label className={Styles.faq__question} for="q5">
              {"¿Qué puedo ver en Netflix?"}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.
            </div>
          </li>
          <li className={Styles.faq__questions}>
            <input type="checkbox" id="q6" />
            <label className={Styles.faq__question} for="q6">
              {"¿Es bueno Netflix para los niños?"}
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true" className={Styles.svg__open} >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </label>
            <div className={Styles.faq__answer}>
              La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.
              <br />
              <br />
              Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.
            </div>
          </li>

        </ul>

        <Form />
      </div>
    </section>
  )
}
