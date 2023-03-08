import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './Home.module.css'
import logo from '../../assets/netflix.png'
import tv from '../../assets/tv.png'
import mobile from '../../assets/mobile.jpg'
import boxshot from '../../assets/boxshot.png'
import device from '../../assets/device.png'
import kids from '../../assets/kids.png'
import { Faq } from '../../components/faq/Faq'
import { Footer } from '../../components/footer/Footer'
import { Form } from '../../components/form/Form'
import { useTranslation } from 'react-i18next'

export const Home = () => {

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
    <div className={Styles.container}>
      <div className={Styles.hero__bg}>

        <nav className={Styles.nav__container}>
          <span className={Styles.nav__span}><img src={logo} alt="logo" /></span>
          <div>
            <div className={Styles.nav__select_container}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
              </svg>

              <select value={language} onClick={onClickSelect} onChange={onChangeLanguage} ref={selectRef} className={Styles.nav__select}>
                <option value="es">{t('home.nav.select.es')}</option>
                <option value="en">{t('home.nav.select.en')}</option>
              </select>

            </div>
            <Link className={Styles.nav__button} to={'/login'}>{t('home.nav.login')}</Link>
          </div>
        </nav>
        <div className={Styles.hero__bg_opacity}></div>

        <div className={Styles.hero__card}>
          <h1>{t('home.hero.title')}</h1>
          <h2>{t('home.hero.subtitle')}</h2>

          <Form />
        </div>

      </div>

      <section className={Styles.watchTv}>
        <div className={Styles.watchTv__container}>
          <div className={Styles.watchTv__text}>
            <h1>{t('home.watch-tv.title')}</h1>
            <h2>{t('home.watch-tv.subtitle')}</h2>
          </div>

          <div className={Styles.watchTv__img_container}>
            <div className={Styles.watchTv__img_animation}>
              <img src={tv} alt="tv_img" />
              <div className={Styles.card_animation}>
                <video autoPlay muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4' />
                </video>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={Styles.download}>
        <div className={Styles.download__container}>
          <div className={Styles.download__text}>
            <h1>{t('home.download.title')}</h1>
            <h2>{t('home.download.subtitle')}</h2>
          </div>

          <div className={Styles.download__img_container}>
            <div className={Styles.download__img_animation}>
              <img src={mobile} alt="tv_img" />
              <div className={Styles.download__card_animation}>
                <div className={Styles.download__card__img}>
                  <img src={boxshot} alt="portada" />
                </div>

                <div className={Styles.download__card__text}>
                  <p>{t('home.download.p1')}</p>
                  <p>{t('home.download.p2')}</p>
                </div>

                <div className={Styles.download__custom_animation}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={Styles.device}>
        <div className={Styles.device__container}>
          <div className={Styles.device__text}>
            <h1>{t('home.device.title')}</h1>
            <h2>{t('home.device.subtitle')}</h2>
          </div>

          <div className={Styles.device__img_container}>
            <div className={Styles.device__img_animation}>
              <img src={device} alt="device" />
              <div className={Styles.device__card_animation}>
                <video autoPlay muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type='video/mp4' />
                </video>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={Styles.kids}>
        <div className={Styles.kids__container}>
          <div className={Styles.kids__text}>
            <h1>Crea perfiles para niños</h1>
            <h2>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</h2>
          </div>

          <div className={Styles.kids__img_container}>
            <div className={Styles.kids__img_animation}>
              <img src={kids} alt="tv_img" />
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </div>
  )
}
